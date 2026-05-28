/**
 * Code.gs — HTTP router for the Annuities Mosaic backend.
 *
 * Endpoints (POST JSON unless noted):
 *   signin           {name, number}
 *   submitAnswer     {number, qIndex, value, timestamp}
 *   submitTVMSetup   {number, qIndex, setup, timestamp}
 *   useHint          {number, qIndex, level, timestamp}
 *   teacherSnapshot  {teacherPin}
 *   teacherAction    {teacherPin, action, number, payload, timestamp}
 *   exportAuditLog   {teacherPin, since}
 *   getConfig        {} | setConfig {teacherPin, config}
 *   connectionPing   GET — {ok, serverTime, version}
 *   rosterPreload    {teacherPin, numbers:[], assignments?:{number:section}}
 */

const VERSION = '1.0.0';

function doGet(e) {
  return jsonOut({ ok: true, serverTime: Date.now(), version: VERSION });
}

function doPost(e) {
  try {
    const body = e && e.postData ? JSON.parse(e.postData.contents || '{}') : {};
    const action = (e && e.parameter && e.parameter.action) || body.action;
    let result;
    switch (action) {
      case 'signin':           result = handleSignin(body); break;
      case 'submitAnswer':     result = handleSubmitAnswer(body); break;
      case 'submitTVMSetup':   result = handleSubmitTVMSetup(body); break;
      case 'useHint':          result = handleUseHint(body); break;
      case 'teacherSnapshot':  result = handleTeacherSnapshot(body); break;
      case 'teacherAction':    result = handleTeacherAction(body); break;
      case 'exportAuditLog':   result = handleExportAuditLog(body); break;
      case 'getConfig':        result = handleGetConfig(body); break;
      case 'setConfig':        result = handleSetConfig(body); break;
      case 'rosterPreload':    result = handleRosterPreload(body); break;
      case 'connectionPing':   result = { ok: true, serverTime: Date.now(), version: VERSION }; break;
      default:                 result = { ok: false, error: 'unknown_action: ' + action };
    }
    return jsonOut(result);
  } catch (err) {
    return jsonOut({ ok: false, error: String(err && err.message || err), stack: err && err.stack });
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ---------- signin ----------
function handleSignin({ name, number, timestamp }) {
  if (!validateNumber(number)) return { ok: false, error: 'invalid_number' };
  if (!validateName(name))     return { ok: false, error: 'invalid_name' };

  const cfg = getConfig_();
  if (cfg.activityStatus === 'closed') {
    return { ok: false, error: 'activity_closed', message: 'Activity not yet started — check with your teacher.' };
  }

  const lock = LockService.getDocumentLock();
  lock.waitLock(10000);
  try {
    let student = Storage.getStudent(number);
    if (!student) {
      const assigned = Assignment.assignSheetFor(number);
      student = {
        number: number,
        name: name,
        sheetId: assigned,
        answers: makeEmptyArray(12),    // [{value, correct, attempts, completedAt}]
        hints: makeEmptyArray(12),      // [{level, html}] per question
        setups: makeEmptyArray(12),     // last submitted TVM setup
        attempts: makeEmptyAttemptsArray(12),  // [[{value, ts}], ...]
        hintCreditsSpent: 0,
        joinedAt: Date.now(),
        updated: Date.now(),
        lastActive: Date.now()
      };
      Storage.putStudent(student);
      Audit.append({ ts: Date.now(), number: number, section: assigned, event: 'signin_new' });
    } else {
      student.name = name; // allow name correction
      student.lastActive = Date.now();
      student.updated = Date.now();
      Storage.putStudent(student);
      Audit.append({ ts: Date.now(), number: number, section: student.sheetId, event: 'signin_resume' });
    }
    return { ok: true, student: redact(student), config: publicConfig_(cfg) };
  } finally {
    lock.releaseLock();
  }
}

// ---------- submitAnswer ----------
function handleSubmitAnswer({ number, qIndex, value, timestamp }) {
  if (!validateNumber(number)) return { ok: false, error: 'invalid_number' };
  if (typeof qIndex !== 'number' || qIndex < 0 || qIndex > 11) return { ok: false, error: 'invalid_qIndex' };
  const num = parseFloat(value);
  if (!isFinite(num)) return { ok: false, error: 'invalid_value' };

  const cfg = getConfig_();
  if (cfg.activityStatus !== 'open') return { ok: false, error: 'activity_not_open' };

  const lock = LockService.getDocumentLock();
  lock.waitLock(10000);
  try {
    const student = Storage.getStudent(number);
    if (!student) return { ok: false, error: 'unknown_student' };
    const sheet = SHEETS_DATA.sheets[student.sheetId];
    const q = sheet.questions[qIndex];
    const tol = SHEETS_DATA.tolerance || 1.00;

    const correct = Math.abs(num - q.answer) <= tol;
    const isClose = !correct && Math.abs(num - q.answer) / Math.max(Math.abs(q.answer), 1) < 0.05;
    student.attempts[qIndex].push({ value: num, ts: Date.now(), correct: correct });
    student.lastActive = Date.now();
    student.updated   = Date.now();

    let feedback = null;
    let gridCells = [];

    if (correct) {
      if (!student.answers[qIndex] || !student.answers[qIndex].correct) {
        student.answers[qIndex] = {
          value: num,
          correct: true,
          attempts: student.attempts[qIndex].length,
          completedAt: Date.now()
        };
        Audit.append({ ts: Date.now(), number: number, section: student.sheetId, event: 'answer_correct',
                       qIndex: qIndex, value: num, attempts: student.attempts[qIndex].length });
      }
      gridCells = gridCellsForSlot(sheet, qIndex);
    } else {
      // Targeted feedback
      const level = (cfg.feedbackLevel === undefined) ? 'targeted' : cfg.feedbackLevel;
      if (level !== 'off') {
        feedback = pickFeedback(q, num, level);
      }
      Audit.append({ ts: Date.now(), number: number, section: student.sheetId, event: 'answer_wrong',
                     qIndex: qIndex, value: num, attempts: student.attempts[qIndex].length, isClose: isClose });
    }

    Storage.putStudent(student);
    const sectionComplete = student.answers.every(a => a && a.correct);
    if (sectionComplete) {
      Audit.append({ ts: Date.now(), number: number, section: student.sheetId, event: 'section_complete' });
    }

    return {
      ok: true,
      correct: correct,
      gridCells: gridCells,
      feedback: feedback,
      attemptNumber: student.attempts[qIndex].length,
      isClose: isClose,
      sectionComplete: sectionComplete
    };
  } finally {
    lock.releaseLock();
  }
}

// ---------- submitTVMSetup ----------
function handleSubmitTVMSetup({ number, qIndex, setup }) {
  if (!validateNumber(number)) return { ok: false, error: 'invalid_number' };
  if (typeof qIndex !== 'number' || qIndex < 0 || qIndex > 11) return { ok: false, error: 'invalid_qIndex' };
  if (!setup || typeof setup !== 'object') return { ok: false, error: 'invalid_setup' };

  const lock = LockService.getDocumentLock();
  lock.waitLock(10000);
  try {
    const student = Storage.getStudent(number);
    if (!student) return { ok: false, error: 'unknown_student' };
    student.setups[qIndex] = { ...setup, ts: Date.now() };
    student.lastActive = Date.now();
    student.updated   = Date.now();
    Storage.putStudent(student);
    Audit.append({ ts: Date.now(), number: number, section: student.sheetId, event: 'tvm_setup',
                   qIndex: qIndex, setup: setup });
    return { ok: true, setupRecorded: true };
  } finally {
    lock.releaseLock();
  }
}

// ---------- useHint ----------
function handleUseHint({ number, qIndex, level }) {
  if (!validateNumber(number)) return { ok: false, error: 'invalid_number' };
  if (typeof qIndex !== 'number' || qIndex < 0 || qIndex > 11) return { ok: false, error: 'invalid_qIndex' };
  level = parseInt(level, 10);
  if (!(level >= 1 && level <= 3)) return { ok: false, error: 'invalid_level' };

  const cfg = getConfig_();
  const cost = Hints.costFor(level);
  const budget = cfg.hintBudget || SHEETS_DATA.hintBudget || 5;

  const lock = LockService.getDocumentLock();
  lock.waitLock(10000);
  try {
    const student = Storage.getStudent(number);
    if (!student) return { ok: false, error: 'unknown_student' };

    // Level 1 is always free. Levels 2/3 require credits.
    if (cost > 0 && (student.hintCreditsSpent + cost) > budget) {
      return { ok: false, error: 'out_of_credits', creditsRemaining: budget - student.hintCreditsSpent };
    }
    student.hintCreditsSpent += cost;
    const sheet = SHEETS_DATA.sheets[student.sheetId];
    const q = sheet.questions[qIndex];
    const html = Hints.render(q, level);

    student.hints[qIndex] = { level: Math.max((student.hints[qIndex] && student.hints[qIndex].level) || 0, level), html: html };
    student.lastActive = Date.now();
    student.updated   = Date.now();
    Storage.putStudent(student);
    Audit.append({ ts: Date.now(), number: number, section: student.sheetId, event: 'hint',
                   qIndex: qIndex, level: level, cost: cost });

    return {
      ok: true,
      newLevel: level,
      hintHtml: html,
      hintCreditsSpent: student.hintCreditsSpent,
      creditsRemaining: budget - student.hintCreditsSpent
    };
  } finally {
    lock.releaseLock();
  }
}

// ---------- teacherSnapshot ----------
function handleTeacherSnapshot({ teacherPin }) {
  if (!authTeacher(teacherPin)) return { ok: false, error: 'not_authorized' };
  const students = Storage.listStudents().map(s => ({
    number: s.number,
    section: s.sheetId,
    solved: (s.answers || []).filter(a => a && a.correct).length,
    hintCreditsSpent: s.hintCreditsSpent || 0,
    lastActive: s.lastActive || s.updated || 0,
    joinedAt: s.joinedAt || 0,
    hasSetup: (s.setups || []).filter(x => x).length,
    attemptCounts: (s.attempts || []).map(a => (a || []).length)
  }));
  return {
    ok: true,
    students: students,
    aggregates: Alerts.aggregates(students),
    alerts: Alerts.compute(students, SHEETS_DATA),
    serverTime: Date.now()
  };
}

// ---------- teacherAction ----------
function handleTeacherAction({ teacherPin, action, number, payload }) {
  if (!authTeacher(teacherPin)) return { ok: false, error: 'not_authorized' };
  const lock = LockService.getDocumentLock();
  lock.waitLock(10000);
  try {
    switch (action) {
      case 'resetHints': {
        const s = Storage.getStudent(number); if (!s) return { ok: false, error: 'unknown_student' };
        s.hints = makeEmptyArray(12); s.hintCreditsSpent = 0; s.updated = Date.now();
        Storage.putStudent(s); Audit.append({ ts: Date.now(), number, event: 'reset_hints' });
        return { ok: true };
      }
      case 'resetStudent': {
        const s = Storage.getStudent(number); if (!s) return { ok: false, error: 'unknown_student' };
        s.answers = makeEmptyArray(12); s.attempts = makeEmptyAttemptsArray(12);
        s.hints   = makeEmptyArray(12); s.setups   = makeEmptyArray(12);
        s.hintCreditsSpent = 0; s.updated = Date.now();
        Storage.putStudent(s); Audit.append({ ts: Date.now(), number, event: 'reset_student' });
        return { ok: true };
      }
      case 'deleteStudent': {
        Storage.deleteStudent(number);
        Audit.append({ ts: Date.now(), number, event: 'delete_student' });
        return { ok: true };
      }
      case 'reassign': {
        const s = Storage.getStudent(number); if (!s) return { ok: false, error: 'unknown_student' };
        const newSection = (payload && payload.section);
        if (!newSection || !SHEETS_DATA.sheets[newSection]) return { ok: false, error: 'invalid_section' };
        s.sheetId = newSection;
        s.answers = makeEmptyArray(12); s.attempts = makeEmptyAttemptsArray(12);
        s.hints = makeEmptyArray(12); s.setups = makeEmptyArray(12);
        s.hintCreditsSpent = 0; s.updated = Date.now();
        Storage.putStudent(s); Audit.append({ ts: Date.now(), number, event: 'reassign', section: newSection });
        return { ok: true };
      }
      case 'resetAllHints': {
        Storage.listStudents().forEach(s => {
          s.hints = makeEmptyArray(12); s.hintCreditsSpent = 0; s.updated = Date.now();
          Storage.putStudent(s);
        });
        Audit.append({ ts: Date.now(), event: 'reset_all_hints' });
        return { ok: true };
      }
      case 'deleteAll': {
        Storage.deleteAll();
        Audit.append({ ts: Date.now(), event: 'delete_all' });
        return { ok: true };
      }
      default: return { ok: false, error: 'unknown_action: ' + action };
    }
  } finally {
    lock.releaseLock();
  }
}

// ---------- audit export ----------
function handleExportAuditLog({ teacherPin, since }) {
  if (!authTeacher(teacherPin)) return { ok: false, error: 'not_authorized' };
  return { ok: true, events: Audit.read(since || 0) };
}

// ---------- config ----------
function handleGetConfig() {
  return { ok: true, config: publicConfig_(getConfig_()) };
}
function handleSetConfig({ teacherPin, config }) {
  if (!authTeacher(teacherPin)) return { ok: false, error: 'not_authorized' };
  if (!config || typeof config !== 'object') return { ok: false, error: 'invalid_config' };
  const merged = Object.assign({}, getConfig_(), config);
  PropertiesService.getScriptProperties().setProperty('CONFIG_JSON', JSON.stringify(merged));
  Audit.append({ ts: Date.now(), event: 'config_set', config: config });
  return { ok: true, config: publicConfig_(merged) };
}

// ---------- roster preload ----------
function handleRosterPreload({ teacherPin, numbers, assignments }) {
  if (!authTeacher(teacherPin)) return { ok: false, error: 'not_authorized' };
  const lock = LockService.getDocumentLock();
  lock.waitLock(15000);
  try {
    const created = [];
    (numbers || []).forEach(n => {
      n = String(n).trim();
      if (!validateNumber(n)) return;
      if (Storage.getStudent(n)) return; // skip existing
      const section = (assignments && assignments[n]) || Assignment.assignSheetFor(n);
      const s = {
        number: n, name: '', sheetId: section,
        answers: makeEmptyArray(12), hints: makeEmptyArray(12),
        setups: makeEmptyArray(12), attempts: makeEmptyAttemptsArray(12),
        hintCreditsSpent: 0, joinedAt: 0, updated: Date.now(), lastActive: 0
      };
      Storage.putStudent(s);
      created.push({ number: n, section: section });
    });
    Audit.append({ ts: Date.now(), event: 'roster_preload', count: created.length });
    return { ok: true, created: created };
  } finally {
    lock.releaseLock();
  }
}

// ---------- helpers ----------
function validateNumber(n) { return typeof n === 'string' && /^\d{5,10}$/.test(n); }
function validateName(s)   { return typeof s === 'string' && s.length >= 1 && s.length <= 60; }
function authTeacher(pin) {
  const stored = PropertiesService.getScriptProperties().getProperty('TEACHER_PIN');
  if (!stored) return false;
  return String(pin || '') === String(stored);
}
function makeEmptyArray(n)         { const r = []; for (let i = 0; i < n; i++) r.push(null); return r; }
function makeEmptyAttemptsArray(n) { const r = []; for (let i = 0; i < n; i++) r.push([]);   return r; }
function redact(s) {
  // Return everything the student needs (their own record); teacher snapshot uses different shape.
  return s;
}
function gridCellsForSlot(sheet, qIndex) {
  const out = [];
  sheet.grid.forEach((slot, idx) => { if (slot === qIndex) out.push(idx); });
  return out;
}
function pickFeedback(q, value, level) {
  // Server-side pattern detection (per addendum):
  //   off_by_freq, pmt_times_n, pv_not_fv, close_check_rounding
  const p = q;
  const ans = p.answer;
  const N = p.years * p.cy;
  const pmtN = p.pmt * N;
  if (Math.abs(value - pmtN) / Math.max(pmtN, 1) < 0.02) {
    return findFeedback(q, 'pmt_times_n');
  }
  for (const factor of [12, 26, 4, 2]) {
    const r = value / ans;
    if (Math.abs(r - factor) < 0.1 || Math.abs(r - 1 / factor) < 0.05) {
      return findFeedback(q, 'off_by_freq');
    }
  }
  // FV-when-PV-expected and vice versa: compute the other-type and compare
  let other = null;
  const i = p.rate / 100 / p.cy;
  if (p.type === 'FV') {
    other = p.pmt * (1 - Math.pow(1 + i, -N)) / i;        // PV value
  } else if (p.type === 'PV') {
    other = p.pmt * (Math.pow(1 + i, N) - 1) / i;          // FV value
  }
  if (other !== null && Math.abs(value - other) / Math.max(other, 1) < 0.02) {
    return findFeedback(q, 'pv_not_fv');
  }
  if (Math.abs(value - ans) / Math.max(ans, 1) < 0.05) {
    return findFeedback(q, 'close_check_rounding');
  }
  // INT_EARNED / INT_PAID stop-short detection
  if (p.type === 'INT_EARNED') {
    const fv = p.pmt * (Math.pow(1 + i, N) - 1) / i;
    if (Math.abs(value - fv) / fv < 0.02) return findFeedback(q, 'fv_not_interest');
  }
  if (p.type === 'INT_PAID') {
    const pv = p.pmt * (1 - Math.pow(1 + i, -N)) / i;
    if (Math.abs(value - pv) / pv < 0.02) return findFeedback(q, 'pv_not_interest');
  }
  return 'Re-check your setup. Try Hint 1 if you\'re stuck.';
}
function findFeedback(q, pattern) {
  const match = (q.commonErrors || []).find(e => e.pattern === pattern);
  return match ? match.feedback : null;
}
function publicConfig_(cfg) {
  return {
    activityStatus: cfg.activityStatus || 'open',
    hintBudget: cfg.hintBudget || (SHEETS_DATA.hintBudget || 5),
    tvmSetupRequired: cfg.tvmSetupRequired !== false,
    feedbackLevel: cfg.feedbackLevel || 'targeted',
    tvmSolverUrl: cfg.tvmSolverUrl || 'https://script.google.com/a/macros/ddsb.ca/s/AKfycbwwyuzTAxStW8ZU8fZbsk2OQa3kc4XN92JjNEzzWqsa6hB0TWmcNXUn2jBhEAf84vll/exec',
    tolerance: SHEETS_DATA.tolerance || 1.00
  };
}
function getConfig_() {
  const raw = PropertiesService.getScriptProperties().getProperty('CONFIG_JSON');
  let cfg = {};
  if (raw) { try { cfg = JSON.parse(raw); } catch (_) { cfg = {}; } }
  // Defaults applied here so internal checks (handleSubmitAnswer, handleSignin) see them.
  if (cfg.activityStatus === undefined) cfg.activityStatus = 'open';
  if (cfg.hintBudget === undefined)     cfg.hintBudget = (SHEETS_DATA && SHEETS_DATA.hintBudget) || 5;
  if (cfg.tvmSetupRequired === undefined) cfg.tvmSetupRequired = true;
  if (cfg.feedbackLevel === undefined)  cfg.feedbackLevel = 'targeted';
  return cfg;
}
