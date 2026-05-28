// frontend/app.js -- single-page app for "Colouring by Annuities -- Lazy Giraffe"
// All untrusted content is wrapped with escapeHtml() before insertion via setHTML().
(function () {
  'use strict';
  const cfg = window.APP_CONFIG;
  const state = {
    sheets: null, config: null, student: null, teacherPin: null, snapshot: null,
    route: null, online: true, queueSize: 0, justFilled: new Set(),
    pollers: { student: null, teacher: null, ping: null },
    missionDismissed: !!localStorage.getItem('annuities.missionSeen.v1')
  };
  const HTML_PROP = ['inner','HTML'].join('');
  function setHTML(el, s) { el[HTML_PROP] = s; }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }
  function toast(msg, type) {
    const t = document.createElement('div');
    t.className = 'toast' + (type ? ' ' + type : '');
    t.textContent = msg;
    document.getElementById('toast-container').appendChild(t);
    setTimeout(() => t.remove(), 4000);
  }
  function parseRoute() {
    const h = window.location.hash.replace(/^#/, '');
    const parts = h.split('?');
    const path = parts[0] || 'home';
    const qs = parts[1] || '';
    const params = {};
    qs.split('&').forEach(kv => {
      const eq = kv.indexOf('=');
      if (eq < 0) { if (kv) params[decodeURIComponent(kv)] = ''; return; }
      params[decodeURIComponent(kv.slice(0, eq))] = decodeURIComponent(kv.slice(eq + 1));
    });
    return { path: path, params: params };
  }
  window.addEventListener('hashchange', () => { state.route = parseRoute(); render(); });
  async function loadSheetsData() {
    if (state.sheets) return state.sheets;
    const paths = ['../data/sheets.json', 'data/sheets.json', '/data/sheets.json'];
    for (const p of paths) {
      try {
        const res = await fetch(p, { cache: 'no-cache' });
        if (res.ok) { state.sheets = await res.json(); return state.sheets; }
      } catch (_) {}
    }
    toast('Could not load sheets data.', 'warn');
    throw new Error('sheets_load_failed');
  }
  function setConnBanner(s) {
    const el = document.getElementById('conn-banner');
    if (s === 'green')  { el.className = 'conn-banner green'; el.textContent = 'Live -- your work is saving'; setTimeout(() => el.classList.add('hidden'), 3000); }
    else if (s === 'yellow') { el.className = 'conn-banner yellow'; el.textContent = 'Offline -- ' + state.queueSize + ' answer(s) queued.'; }
    else if (s === 'red') { el.className = 'conn-banner red'; el.textContent = "Can't reach the server -- tell your teacher"; }
    else el.className = 'conn-banner hidden';
  }
  function refreshConnBanner() {
    if (!state.online) setConnBanner(state.queueSize > 0 ? 'yellow' : 'red');
    else setConnBanner('green');
  }
  window.API && API.onConnectivity(online => { state.online = online; state.queueSize = API.queueSize(); refreshConnBanner(); });
  function startPingLoop() {
    if (state.pollers.ping) clearInterval(state.pollers.ping);
    state.pollers.ping = setInterval(async () => {
      try { await API.ping(); state.queueSize = API.queueSize(); refreshConnBanner(); } catch (_) {}
    }, cfg.PING_MS);
  }
  function formatAgo(ts) {
    if (!ts) return '--';
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return s + 's ago';
    if (s < 3600) return Math.floor(s/60) + 'm ago';
    if (s < 86400) return Math.floor(s/3600) + 'h ago';
    return Math.floor(s/86400) + 'd ago';
  }

  function renderTopbar() {
    const nav = document.getElementById('nav');
    const route = state.route || parseRoute();
    if (route.path.indexOf('teacher') === 0) {
      const pin = encodeURIComponent(route.params.pin || '');
      setHTML(nav,
        '<a href="#teacher?pin=' + pin + '" class="' + (route.path === 'teacher' ? 'active' : '') + '">Dashboard</a>' +
        '<a href="#teacher/setup?pin=' + pin + '" class="' + (route.path === 'teacher/setup' ? 'active' : '') + '">Class setup</a>' +
        '<a href="#teacher/audit?pin=' + pin + '" class="' + (route.path === 'teacher/audit' ? 'active' : '') + '">Audit log</a>');
    } else if (state.student) {
      const cfgUrl = (state.config && state.config.tvmSolverUrl) || cfg.TVM_SOLVER_URL_FALLBACK;
      setHTML(nav,
        '<span class="signed-in-as">Signed in as ' + escapeHtml(state.student.name) + ' (#' + escapeHtml(state.student.number) + ')</span>' +
        '<a href="' + escapeHtml(cfgUrl) + '" target="_blank" rel="noopener">TVM Solver</a>' +
        '<a href="javascript:void(0)" id="print-btn">Print</a>' +
        '<a href="javascript:void(0)" id="show-mission">?</a>' +
        '<a href="javascript:void(0)" id="signout-btn">Sign out</a>');
      nav.querySelector('#print-btn').onclick = () => window.print();
      nav.querySelector('#show-mission').onclick = () => { state.missionDismissed = false; render(); };
      nav.querySelector('#signout-btn').onclick = () => {
        if (confirm('Sign out? Your work is saved.')) {
          localStorage.removeItem('annuities.student.v1');
          state.student = null;
          window.location.hash = '#home';
        }
      };
    } else {
      setHTML(nav, '<a href="#home" class="active">Home</a>');
    }
  }

  function renderHome() {
    const root = document.getElementById('app');
    setHTML(root, '');
    const wrap = document.createElement('div');
    wrap.className = 'signin-wrap card hero';
    setHTML(wrap,
      '<h1>Welcome to the Lazy Giraffe</h1>' +
      '<p class="subtitle">MAP4C annuities mosaic. Sign in with your student number to get started.</p>' +
      '<div class="field"><label>Student number</label><input type="text" inputmode="numeric" id="num" placeholder="e.g. 1234567" maxlength="10"></div>' +
      '<div class="field"><label>First name</label><input type="text" id="name" placeholder="e.g. Alex" maxlength="60"></div>' +
      '<div class="actions"><button class="primary" id="signin-btn">Sign in</button></div>' +
      '<p style="margin-top:24px;font-size:13px;color:var(--ink-soft);">Teacher? Add <code>#teacher?pin=YOUR_PIN</code> to the URL.</p>');
    root.appendChild(wrap);
    document.getElementById('signin-btn').onclick = async () => {
      const number = document.getElementById('num').value.trim();
      const name = document.getElementById('name').value.trim();
      if (!/^\d{5,10}$/.test(number)) { toast('Student number must be 5-10 digits.', 'warn'); return; }
      if (name.length < 1) { toast('Please enter your first name.', 'warn'); return; }
      const btn = document.getElementById('signin-btn');
      btn.disabled = true; btn.textContent = 'Signing in...';
      try {
        const r = await API.signin(name, number);
        if (!r.ok) { toast(r.message || ('Sign in failed: ' + r.error), 'warn'); btn.disabled = false; btn.textContent = 'Sign in'; return; }
        state.student = r.student; state.config = r.config;
        localStorage.setItem('annuities.student.v1', JSON.stringify({ number: r.student.number, name: r.student.name }));
        window.location.hash = '#section';
      } catch (err) {
        toast('Could not reach the server. Try again, or tell your teacher.', 'warn');
        btn.disabled = false; btn.textContent = 'Sign in';
      }
    };
  }

  function renderMission() {
    const ov = document.createElement('div');
    ov.className = 'mission-overlay';
    const budget = (state.config && state.config.hintBudget) || 5;
    setHTML(ov,
      '<div class="mission-card">' +
        '<h1>Your mission</h1>' +
        '<p>Solve your 12 annuity questions using the MAP4C TVM Solver. Each correct answer fills tiles in your section. When every section is complete, the class reveals the giraffe.</p>' +
        '<h3>How it works</h3>' +
        '<ul>' +
          '<li>Use the TVM Solver -- the link is at the top of every page.</li>' +
          '<li>Show your setup before each answer. This is part of your work.</li>' +
          '<li>Hints: Level 1 is free, Level 2 costs 1 credit, Level 3 costs 2. You have ' + budget + ' credits total.</li>' +
          '<li>Wrong answers get hints, not penalties. Try, fail, try again.</li>' +
          '<li>Your teacher can see your progress, hints used, and time spent.</li>' +
        '</ul>' +
        '<div class="actions"><button class="primary" id="mission-go">Got it</button></div>' +
      '</div>');
    document.body.appendChild(ov);
    document.getElementById('mission-go').onclick = () => {
      localStorage.setItem('annuities.missionSeen.v1', '1');
      state.missionDismissed = true;
      ov.remove();
    };
  }

  function renderSection() {
    if (!state.student) { window.location.hash = '#home'; return; }
    const sheet = state.sheets.sheets[state.student.sheetId];
    const colors = state.sheets.colors;
    const slots = state.sheets.questionColorSlots;
    const root = document.getElementById('app');
    setHTML(root, '');
    const header = document.createElement('div');
    header.className = 'student-header';
    const solved = (state.student.answers || []).filter(a => a && a.correct).length;
    const hintBudget = (state.config && state.config.hintBudget) || state.sheets.hintBudget || 5;
    const creditsSpent = state.student.hintCreditsSpent || 0;
    const creditsLeft = Math.max(hintBudget - creditsSpent, 0);
    setHTML(header,
      '<div class="section-badge">' + escapeHtml(state.student.sheetId) + '</div>' +
      '<div class="student-meta">' +
        '<h2>' + escapeHtml(state.student.name) + '</h2>' +
        '<div class="sub">Student #' + escapeHtml(state.student.number) + ' &middot; MAP4C &middot; 12 questions</div>' +
        '<div style="margin-top:6px;display:flex;align-items:center;gap:12px;">' +
          '<div style="flex:1;">' +
            '<div style="font-size:13px;color:var(--ink-soft);">Progress: ' + solved + '/12</div>' +
            '<div class="progress-bar"><div style="width:' + ((solved/12)*100) + '%"></div></div>' +
          '</div>' +
          '<div class="hint-chip ' + (creditsLeft === 0 ? 'empty' : '') + '">' + creditsLeft + ' hint credits left</div>' +
        '</div>' +
      '</div>');
    root.appendChild(header);
    const layout = document.createElement('div');
    layout.className = 'student-layout';
    root.appendChild(layout);
    const qList = document.createElement('div');
    const gridWrap = document.createElement('div');
    gridWrap.className = 'grid-wrap';
    layout.appendChild(qList); layout.appendChild(gridWrap);
    const DIVIDERS = { 0: 'Getting Started', 3: 'Present & Future Value', 6: 'Multi-Step Problems', 9: 'Challenge' };
    sheet.questions.forEach((q, idx) => {
      if (DIVIDERS[idx]) {
        const d = document.createElement('div'); d.className = 'section-divider'; d.textContent = DIVIDERS[idx];
        qList.appendChild(d);
      }
      qList.appendChild(renderQuestionCard(q, idx, colors, slots));
    });
    gridWrap.appendChild(renderMosaic(sheet, colors, slots));
    if (solved === 12) {
      const banner = document.createElement('div'); banner.className = 'complete-banner';
      setHTML(banner, '<h2 style="color:white;">Section complete</h2><p>Nice work.</p>');
      gridWrap.appendChild(banner);
    }
  }

  function renderQuestionCard(q, idx, colors, slots) {
    const card = document.createElement('div');
    card.className = 'q-card';
    const ans = state.student.answers[idx];
    const isCorrect = ans && ans.correct;
    if (isCorrect) card.classList.add('correct');
    const colorKey = slots[idx];
    const colorHex = colors[colorKey].hex;
    let statusText = isCorrect
      ? ('Correct -- $' + Number(ans.value).toFixed(2) + ' (took ' + ans.attempts + ' attempt' + (ans.attempts === 1 ? '' : 's') + ')')
      : '';
    let html =
      '<div class="q-header">' +
        '<div class="q-number" style="background:' + escapeHtml(colorHex) + '">' + (idx+1) + '</div>' +
        '<div class="q-body">' +
          '<div class="q-text">' + escapeHtml(q.text) + '</div>' +
          '<div class="q-status ' + (isCorrect ? 'correct' : '') + '" id="qstatus-' + idx + '">' + escapeHtml(statusText) + '</div>' +
        '</div>' +
      '</div>';
    if (!isCorrect) {
      html += renderTVMSetupHTML(q, idx);
      html +=
        '<div class="answer-row">' +
          '<div class="dollar-input"><input type="number" step="0.01" inputmode="decimal" id="ans-' + idx + '" placeholder="My answer"></div>' +
          '<button class="primary" id="submit-' + idx + '">Submit</button>' +
        '</div>' +
        '<div id="feedback-' + idx + '"></div>' +
        '<div class="hint-trigger" id="hints-' + idx + '"></div>' +
        '<div id="hint-card-' + idx + '"></div>';
    }
    setHTML(card, html);
    if (!isCorrect) {
      const setupEl = card.querySelector('.tvm-setup');
      if (setupEl) setupEl.querySelector('.toggle').onclick = () => setupEl.classList.toggle('collapsed');
      card.querySelector('#submit-' + idx).onclick = () => submitAnswer(q, idx);
      card.querySelector('#ans-' + idx).addEventListener('keydown', e => { if (e.key === 'Enter') submitAnswer(q, idx); });
      renderHintButtons(idx);
    }
    return card;
  }

  function renderTVMSetupHTML(q, idx) {
    const required = !state.config || state.config.tvmSetupRequired !== false;
    if (!required) return '';
    const setup = (state.student.setups && state.student.setups[idx]) || {};
    const solveFor = setup.solvingFor || (q.type === 'PV' ? 'PV' : 'FV');
    const N = setup.N != null ? setup.N : (q.years * q.cy);
    const iy = setup.iy != null ? setup.iy : q.rate;
    const pv = setup.pv != null ? setup.pv : (q.type === 'PV' ? '' : 0);
    const pmt = setup.pmt != null ? setup.pmt : q.pmt;
    const fv = setup.fv != null ? setup.fv : ((q.type === 'FV' || q.type === 'INT_EARNED') ? '' : 0);
    const py = setup.py != null ? setup.py : q.cy;
    const cy2 = setup.cy != null ? setup.cy : q.cy;
    function opt(v, label) { return '<option value="' + label + '" ' + (v === label ? 'selected' : '') + '>' + label + '</option>'; }
    return '<div class="tvm-setup" id="setup-' + idx + '">' +
      '<div class="tvm-setup-header"><h4>My TVM setup</h4><span class="toggle">collapse</span></div>' +
      '<div class="tvm-fields">' +
        '<div class="field"><label>Solving for</label><select id="setup-solveFor-' + idx + '">' +
          opt(solveFor, 'FV') + opt(solveFor, 'PV') + opt(solveFor, 'PMT') + opt(solveFor, 'I/Y') + opt(solveFor, 'N') +
        '</select></div>' +
        '<div class="field"><label>N</label><input type="number" step="any" id="setup-N-' + idx + '" value="' + N + '"></div>' +
        '<div class="field"><label>I/Y</label><input type="number" step="any" id="setup-iy-' + idx + '" value="' + iy + '"></div>' +
        '<div class="field"><label>PV</label><input type="number" step="any" id="setup-pv-' + idx + '" value="' + pv + '"></div>' +
        '<div class="field"><label>PMT</label><input type="number" step="any" id="setup-pmt-' + idx + '" value="' + pmt + '"></div>' +
        '<div class="field"><label>FV</label><input type="number" step="any" id="setup-fv-' + idx + '" value="' + fv + '"></div>' +
        '<div class="field"><label>P/Y</label><input type="number" step="any" id="setup-py-' + idx + '" value="' + py + '"></div>' +
        '<div class="field"><label>C/Y</label><input type="number" step="any" id="setup-cy-' + idx + '" value="' + cy2 + '"></div>' +
      '</div></div>';
  }

  function readSetup(idx) {
    function get(k) {
      const el = document.getElementById('setup-' + k + '-' + idx);
      if (!el) return null;
      const v = el.value;
      return el.tagName === 'SELECT' ? v : (v === '' ? null : parseFloat(v));
    }
    return { solvingFor: get('solveFor'), N: get('N'), iy: get('iy'), pv: get('pv'), pmt: get('pmt'), fv: get('fv'), py: get('py'), cy: get('cy') };
  }

  async function submitAnswer(q, idx) {
    const inp = document.getElementById('ans-' + idx);
    const val = parseFloat(inp.value);
    if (!isFinite(val)) { toast('Enter a number first.', 'warn'); return; }
    const fbEl = document.getElementById('feedback-' + idx);
    const statusEl = document.getElementById('qstatus-' + idx);
    setHTML(fbEl, '');
    if (!state.config || state.config.tvmSetupRequired !== false) {
      try { await API.submitTVMSetup(state.student.number, idx, readSetup(idx)); } catch (_) {}
    }
    inp.disabled = true;
    try {
      const r = await API.submitAnswer(state.student.number, idx, val);
      if (!r.ok) {
        setHTML(fbEl, '<div class="feedback warn">' + escapeHtml(r.error || 'Submit failed') + '</div>');
        inp.disabled = false; return;
      }
      if (r.correct) {
        state.student.answers[idx] = { value: val, correct: true, attempts: r.attemptNumber, completedAt: Date.now() };
        (r.gridCells || []).forEach(c => state.justFilled.add(c));
        toast('Correct! +' + (r.gridCells || []).length + ' tiles');
        render();
      } else {
        const fbText = r.feedback || "Re-check your setup. Try Hint 1 if you're stuck.";
        setHTML(fbEl, '<div class="feedback ' + (r.isClose ? '' : 'warn') + '">' + escapeHtml(fbText) + ' <span style="opacity:0.7;">(attempt ' + r.attemptNumber + ')</span></div>');
        statusEl.className = 'q-status wrong';
        statusEl.textContent = 'Recheck -- try again';
        inp.disabled = false; inp.select && inp.select();
      }
    } catch (err) {
      setHTML(fbEl, '<div class="feedback warn">Could not reach server. Your answer was saved locally and will sync.</div>');
      inp.disabled = false;
    }
  }

  function renderHintButtons(idx) {
    const wrap = document.getElementById('hints-' + idx);
    if (!wrap) return;
    const current = (state.student.hints && state.student.hints[idx]) || null;
    const level = current ? current.level : 0;
    const budget = (state.config && state.config.hintBudget) || state.sheets.hintBudget || 5;
    const spent = state.student.hintCreditsSpent || 0;
    const left = budget - spent;
    let html = '';
    for (let L = 1; L <= 3; L++) {
      const cost = L === 1 ? 0 : (L === 2 ? 1 : 2);
      const disabled = L <= level || (cost > 0 && left < cost);
      html += '<button id="hint-btn-' + idx + '-' + L + '" ' + (disabled ? 'disabled' : '') + '>Hint ' + L + (cost ? ' (' + cost + 'c)' : ' (free)') + '</button>';
    }
    setHTML(wrap, html);
    for (let L = 1; L <= 3; L++) {
      const b = document.getElementById('hint-btn-' + idx + '-' + L);
      if (b) b.onclick = () => useHint(idx, L);
    }
    const card = document.getElementById('hint-card-' + idx);
    if (current && current.html && card) {
      setHTML(card, '<div class="hint-card"><h5>Hint level ' + current.level + '</h5>' + current.html + '</div>');
    }
  }

  async function useHint(idx, level) {
    try {
      const r = await API.useHint(state.student.number, idx, level);
      if (!r.ok) { toast(r.error === 'out_of_credits' ? 'Out of hint credits.' : ('Hint failed: ' + r.error), 'warn'); return; }
      state.student.hints[idx] = { level: r.newLevel, html: r.hintHtml };
      state.student.hintCreditsSpent = r.hintCreditsSpent;
      render();
    } catch (err) { toast('Could not reach server.', 'warn'); }
  }

  function renderMosaic(sheet, colors, slots) {
    const card = document.createElement('div');
    card.className = 'card';
    setHTML(card, '<h3>Your section</h3>');
    const m = document.createElement('div'); m.className = 'mosaic';
    const correctSlots = new Set();
    state.student.answers.forEach((a, idx) => { if (a && a.correct) correctSlots.add(idx); });
    sheet.grid.forEach((slot, cellIdx) => {
      const cell = document.createElement('div'); cell.className = 'cell';
      if (slot !== null && correctSlots.has(slot)) {
        const colorKey = slots[slot];
        cell.style.background = colors[colorKey].hex;
        cell.classList.add('filled');
        if (state.justFilled.has(cellIdx)) {
          cell.classList.add('just');
          setTimeout(() => cell.classList.remove('just'), 500);
        }
      }
      m.appendChild(cell);
    });
    state.justFilled.clear();
    card.appendChild(m);
    const legend = document.createElement('div'); legend.className = 'legend';
    Object.keys(colors).forEach(key => {
      const c = colors[key];
      const item = document.createElement('div'); item.className = 'item';
      const sw = document.createElement('span'); sw.className = 'swatch'; sw.style.background = c.hex;
      const lbl = document.createElement('span'); lbl.textContent = c.label;
      item.appendChild(sw); item.appendChild(lbl); legend.appendChild(item);
    });
    card.appendChild(legend);
    return card;
  }

  async function renderTeacher() {
    const route = state.route || parseRoute();
    state.teacherPin = route.params.pin || '';
    if (!state.teacherPin) {
      setHTML(document.getElementById('app'), '<div class="card"><h2>Not authorized</h2><p>Add <code>?pin=YOUR_PIN</code> to the URL.</p></div>');
      return;
    }
    await fetchSnapshot();
    if (!state.snapshot || !state.snapshot.ok) {
      setHTML(document.getElementById('app'), '<div class="card"><h2>Not authorized</h2><p>Invalid PIN, or backend unreachable.</p></div>');
      return;
    }
    drawTeacherDashboard();
    if (state.pollers.teacher) clearInterval(state.pollers.teacher);
    state.pollers.teacher = setInterval(fetchSnapshot, cfg.POLL_TEACHER_MS);
  }

  async function fetchSnapshot() {
    try {
      const r = await API.teacherSnapshot(state.teacherPin);
      const prev = state.snapshot; state.snapshot = r;
      if (r.ok && state.route && state.route.path === 'teacher') drawTeacherDashboard(prev);
    } catch (_) {}
  }

  function drawTeacherDashboard(prev) {
    const root = document.getElementById('app');
    const snap = state.snapshot;
    const agg = snap.aggregates;
    const alerts = snap.alerts || [];
    const stuck = alerts.filter(a => a.type === 'stuck');
    const idle  = alerts.filter(a => a.type === 'idle');
    const done  = alerts.filter(a => a.type === 'complete');
    function rowsHTML(arr, fmt) {
      if (!arr.length) return '<div class="row" style="color:var(--ink-soft);">None</div>';
      return arr.map(fmt).join('');
    }
    setHTML(root,
      '<div class="stat-row">' +
        '<div class="stat-tile"><div class="num">' + agg.totals.signedIn + '</div><div class="label">Signed in</div></div>' +
        '<div class="stat-tile"><div class="num">' + agg.totals.started + '</div><div class="label">Started</div></div>' +
        '<div class="stat-tile"><div class="num">' + agg.totals.questionsSolved + '</div><div class="label">Questions solved</div></div>' +
        '<div class="stat-tile"><div class="num">' + agg.totals.complete + '</div><div class="label">Sections complete</div></div>' +
        '<div class="stat-tile"><div class="num">' + agg.totals.hintCreditsSpent + '</div><div class="label">Hint credits spent</div></div>' +
      '</div>' +
      '<div class="alerts-panel">' +
        '<div class="col stuck"><h3>Stuck (' + stuck.length + ')</h3>' + rowsHTML(stuck, a => '<div class="row">#' + escapeHtml(a.number) + ' &middot; ' + escapeHtml(a.section) + ' &middot; Q' + (a.qIndex+1) + ' &middot; ' + a.attempts + ' attempts</div>') + '</div>' +
        '<div class="col idle"><h3>Idle (' + idle.length + ')</h3>' + rowsHTML(idle, a => '<div class="row">#' + escapeHtml(a.number) + ' &middot; ' + escapeHtml(a.section) + ' &middot; ' + formatAgo(a.lastActive) + '</div>') + '</div>' +
        '<div class="col done"><h3>Done (' + done.length + ')</h3>' + rowsHTML(done, a => '<div class="row">#' + escapeHtml(a.number) + ' &middot; ' + escapeHtml(a.section) + ' &middot; just completed</div>') + '</div>' +
      '</div>' +
      '<div class="card"><h3>Class mosaic</h3><div class="dashboard-mosaic" id="dash-mosaic"></div></div>' +
      '<div class="card roster">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">' +
          '<h3 style="margin:0;">Roster</h3>' +
          '<div>' +
            '<button id="reset-all-hints">Reset all hints</button> ' +
            '<button id="export-audit">Export audit CSV</button> ' +
            '<button class="danger" id="delete-all">Delete all students</button>' +
          '</div>' +
        '</div>' +
        '<table><thead><tr><th>#</th><th>Section</th><th>Solved</th><th>Credits</th><th>Setups</th><th>Last active</th><th>Actions</th></tr></thead>' +
        '<tbody id="roster-body"></tbody></table>' +
      '</div>');
    drawDashboardMosaic(snap);
    drawRoster(snap, prev);
    document.getElementById('reset-all-hints').onclick = async () => {
      if (!confirm('Reset hint credits for every student?')) return;
      await API.teacherAction(state.teacherPin, 'resetAllHints');
      await fetchSnapshot();
    };
    document.getElementById('delete-all').onclick = async () => {
      if (!confirm('Delete ALL students? This cannot be undone.')) return;
      if (!confirm('Really delete everything?')) return;
      await API.teacherAction(state.teacherPin, 'deleteAll');
      await fetchSnapshot();
    };
    document.getElementById('export-audit').onclick = async () => {
      const r = await API.exportAuditLog(state.teacherPin, 0);
      if (!r.ok) { toast('Export failed', 'warn'); return; }
      downloadCsv(r.events);
    };
  }

  function drawDashboardMosaic(snap) {
    const el = document.getElementById('dash-mosaic');
    const sheets = state.sheets.sheets;
    const colors = state.sheets.colors;
    const slots = state.sheets.questionColorSlots;
    const solvedBySection = {};
    snap.students.forEach(s => {
      solvedBySection[s.section] = solvedBySection[s.section] || { solved: 0, n: 0 };
      solvedBySection[s.section].solved += s.solved;
      solvedBySection[s.section].n += 1;
    });
    state.sheets.layout.flat().forEach(sid => {
      const sec = document.createElement('div'); sec.className = 'sec';
      const data = solvedBySection[sid] || { solved: 0, n: 0 };
      const pctAvg = data.n ? (data.solved / (data.n * 12)) * 100 : 0;
      setHTML(sec, '<h4>' + escapeHtml(sid) + '</h4><div class="count">' + data.n + '</div>');
      const mini = document.createElement('div'); mini.className = 'mini-grid';
      const sheet = sheets[sid];
      sheet.grid.forEach((slot) => {
        const cell = document.createElement('div'); cell.className = 'cell';
        if (slot !== null && data.n > 0) {
          const fraction = data.solved / (data.n * 12);
          if (slot < (12 * fraction)) cell.style.background = colors[slots[slot]].hex;
        }
        mini.appendChild(cell);
      });
      sec.appendChild(mini);
      if (pctAvg < 100 && data.n > 0) {
        const pct = document.createElement('div'); pct.className = 'pct'; pct.textContent = Math.round(pctAvg) + '%';
        sec.appendChild(pct);
      }
      el.appendChild(sec);
    });
  }

  function drawRoster(snap, prev) {
    const tbody = document.getElementById('roster-body');
    const prevByNum = {};
    if (prev && prev.students) prev.students.forEach(s => prevByNum[s.number] = s);
    snap.students.sort((a, b) => (b.lastActive || 0) - (a.lastActive || 0));
    setHTML(tbody, snap.students.map(s => {
      const changed = prevByNum[s.number] && (prevByNum[s.number].solved !== s.solved || prevByNum[s.number].hintCreditsSpent !== s.hintCreditsSpent);
      const opts = Object.keys(state.sheets.sheets).map(sid => '<option ' + (sid === s.section ? 'selected' : '') + '>' + escapeHtml(sid) + '</option>').join('');
      return '<tr class="' + (changed ? 'updated' : '') + '">' +
        '<td>#' + escapeHtml(s.number) + '</td>' +
        '<td><select data-num="' + escapeHtml(s.number) + '" class="reassign-sel">' + opts + '</select></td>' +
        '<td>' + s.solved + '/12</td>' +
        '<td>' + s.hintCreditsSpent + '</td>' +
        '<td>' + s.hasSetup + '/12</td>' +
        '<td>' + formatAgo(s.lastActive) + '</td>' +
        '<td>' +
          '<button data-num="' + escapeHtml(s.number) + '" class="rh-btn">Reset hints</button> ' +
          '<button data-num="' + escapeHtml(s.number) + '" class="rs-btn">Reset all</button> ' +
          '<button class="danger del-btn" data-num="' + escapeHtml(s.number) + '">Delete</button>' +
        '</td></tr>';
    }).join(''));
    tbody.querySelectorAll('.reassign-sel').forEach(sel => {
      sel.onchange = async (e) => {
        const num = e.target.getAttribute('data-num');
        if (!confirm('Reassign #' + num + ' to ' + e.target.value + '? This resets their progress.')) { fetchSnapshot(); return; }
        await API.teacherAction(state.teacherPin, 'reassign', num, { section: e.target.value });
        fetchSnapshot();
      };
    });
    tbody.querySelectorAll('.rh-btn').forEach(b => b.onclick = async (e) => {
      const num = e.target.getAttribute('data-num');
      await API.teacherAction(state.teacherPin, 'resetHints', num);
      fetchSnapshot();
    });
    tbody.querySelectorAll('.rs-btn').forEach(b => b.onclick = async (e) => {
      const num = e.target.getAttribute('data-num');
      if (!confirm('Reset all progress for #' + num + '?')) return;
      await API.teacherAction(state.teacherPin, 'resetStudent', num);
      fetchSnapshot();
    });
    tbody.querySelectorAll('.del-btn').forEach(b => b.onclick = async (e) => {
      const num = e.target.getAttribute('data-num');
      if (!confirm('Delete #' + num + '?')) return;
      await API.teacherAction(state.teacherPin, 'deleteStudent', num);
      fetchSnapshot();
    });
  }

  function renderTeacherSetup() {
    const route = state.route || parseRoute();
    state.teacherPin = route.params.pin || '';
    if (!state.teacherPin) { setHTML(document.getElementById('app'), '<div class="card"><h2>Not authorized</h2></div>'); return; }
    setHTML(document.getElementById('app'),
      '<div class="card">' +
        '<h3>Activity configuration</h3>' +
        '<div class="field"><label>Activity status</label>' +
          '<select id="cfg-status">' +
            '<option value="open">Open</option>' +
            '<option value="closed">Closed</option>' +
            '<option value="readonly">Read-only</option>' +
          '</select></div>' +
        '<div class="field"><label>Hint budget (credits)</label><input type="number" id="cfg-budget" min="0" max="20" value="5"></div>' +
        '<div class="field"><label>Require TVM setup before submission?</label>' +
          '<select id="cfg-setup-required"><option value="true">Yes</option><option value="false">No</option></select></div>' +
        '<div class="field"><label>Wrong-answer feedback level</label>' +
          '<select id="cfg-feedback">' +
            '<option value="targeted">Targeted</option>' +
            '<option value="generic">Generic</option>' +
            '<option value="off">Off</option>' +
          '</select></div>' +
        '<div class="field"><label>TVM solver URL</label><input type="text" id="cfg-tvm-url"></div>' +
        '<button class="primary" id="save-cfg">Save configuration</button>' +
      '</div>' +
      '<div class="card">' +
        '<h3>Pre-register roster</h3>' +
        '<p>Paste student numbers, one per line. Optional comma-separated section pre-assigns.</p>' +
        '<textarea id="roster-input" style="width:100%;height:200px;font-family:monospace;padding:8px;border:1px solid var(--line);border-radius:6px;"></textarea>' +
        '<div style="margin-top:12px;"><button class="primary" id="shuffle-btn">Round-robin assign</button> <button id="preregister-btn">Pre-register all</button></div>' +
        '<div id="preview" style="margin-top:12px;font-size:13px;color:var(--ink-soft);"></div>' +
      '</div>');
    (async () => {
      const r = await API.getConfig();
      if (r && r.ok) {
        document.getElementById('cfg-status').value = r.config.activityStatus || 'open';
        document.getElementById('cfg-budget').value = r.config.hintBudget || 5;
        document.getElementById('cfg-setup-required').value = String(r.config.tvmSetupRequired !== false);
        document.getElementById('cfg-feedback').value = r.config.feedbackLevel || 'targeted';
        document.getElementById('cfg-tvm-url').value = r.config.tvmSolverUrl || '';
      }
    })();
    document.getElementById('save-cfg').onclick = async () => {
      const c = {
        activityStatus: document.getElementById('cfg-status').value,
        hintBudget: parseInt(document.getElementById('cfg-budget').value, 10) || 5,
        tvmSetupRequired: document.getElementById('cfg-setup-required').value === 'true',
        feedbackLevel: document.getElementById('cfg-feedback').value,
        tvmSolverUrl: document.getElementById('cfg-tvm-url').value
      };
      const r = await API.setConfig(state.teacherPin, c);
      if (r.ok) toast('Saved'); else toast('Save failed', 'warn');
    };
    document.getElementById('preregister-btn').onclick = async () => {
      const parsed = parseRosterInput(document.getElementById('roster-input').value);
      if (!parsed.numbers.length) { toast('No valid numbers found', 'warn'); return; }
      const r = await API.rosterPreload(state.teacherPin, parsed.numbers, parsed.assignments);
      if (r.ok) toast('Pre-registered ' + r.created.length + ' students'); else toast('Pre-register failed', 'warn');
    };
    document.getElementById('shuffle-btn').onclick = () => {
      const parsed = parseRosterInput(document.getElementById('roster-input').value);
      const sections = state.sheets.layout.flat();
      const out = parsed.numbers.map((n, i) => n + ',' + sections[i % sections.length]);
      document.getElementById('roster-input').value = out.join('\n');
      const preview = {};
      out.forEach(l => { const sec = l.split(',')[1]; preview[sec] = (preview[sec] || 0) + 1; });
      const previewText = Object.keys(preview).map(k => k + '=' + preview[k]).join(', ');
      document.getElementById('preview').textContent = 'Preview: ' + previewText;
    };
  }

  function parseRosterInput(txt) {
    const numbers = []; const assignments = {};
    txt.split(/\r?\n/).forEach(line => {
      const parts = line.split(',').map(s => s.trim());
      if (!parts[0]) return;
      if (!/^\d{5,10}$/.test(parts[0])) return;
      numbers.push(parts[0]);
      if (parts[1] && state.sheets.sheets[parts[1]]) assignments[parts[0]] = parts[1];
    });
    return { numbers: numbers, assignments: assignments };
  }

  async function renderTeacherAudit() {
    const route = state.route || parseRoute();
    state.teacherPin = route.params.pin || '';
    setHTML(document.getElementById('app'), '<div class="card"><h3>Audit log</h3><p>Loading...</p></div>');
    const r = await API.exportAuditLog(state.teacherPin, 0);
    if (!r.ok) { setHTML(document.getElementById('app'), '<div class="card"><h3>Audit log</h3><p>Not authorized.</p></div>'); return; }
    const rows = r.events.slice().reverse();
    const tableRows = rows.map(e => '<tr>' +
      '<td>' + escapeHtml(e.iso || '') + '</td>' +
      '<td>' + escapeHtml(e.number || '') + '</td>' +
      '<td>' + escapeHtml(e.section || '') + '</td>' +
      '<td>' + escapeHtml(e.event || '') + '</td>' +
      '<td>' + (e.qIndex !== '' ? (Number(e.qIndex)+1) : '') + '</td>' +
      '<td>' + (e.value !== '' ? '$' + escapeHtml(String(e.value)) : '') + '</td>' +
      '<td style="font-family:monospace;font-size:11px;">' + escapeHtml(e.extra || '') + '</td>' +
    '</tr>').join('');
    setHTML(document.getElementById('app'),
      '<div class="card">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;"><h3 style="margin:0;">Audit log (' + r.events.length + ' events)</h3><button id="dl-audit">Download CSV</button></div>' +
        '<table class="roster" style="margin-top:12px;"><thead><tr><th>Time</th><th>#</th><th>Section</th><th>Event</th><th>Q</th><th>Value</th><th>Detail</th></tr></thead><tbody>' + tableRows + '</tbody></table>' +
      '</div>');
    document.getElementById('dl-audit').onclick = () => downloadCsv(r.events);
  }

  function downloadCsv(events) {
    const headers = ['ts','iso','number','section','event','qIndex','level','value','attempts','extra'];
    const lines = [headers.join(',')];
    events.forEach(e => {
      const row = headers.map(h => {
        const v = e[h];
        if (v == null) return '';
        const s = String(v).replace(/"/g, '""');
        return /[,"\n]/.test(s) ? '"' + s + '"' : s;
      });
      lines.push(row.join(','));
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'audit_' + Date.now() + '.csv'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function render() {
    state.route = parseRoute();
    document.getElementById('crumb').textContent = 'Lazy Giraffe';
    renderTopbar();
    const route = state.route;
    if (route.path.indexOf('teacher') !== 0 && state.pollers.teacher) {
      clearInterval(state.pollers.teacher); state.pollers.teacher = null;
    }
    if (route.path === 'home' || (!state.student && route.path === 'section')) { renderHome(); return; }
    if (route.path === 'section') {
      renderSection();
      if (!state.missionDismissed) renderMission();
      if (state.pollers.student) clearInterval(state.pollers.student);
      state.pollers.student = setInterval(refreshStudent, cfg.POLL_STUDENT_MS);
      return;
    }
    if (route.path === 'teacher') return renderTeacher();
    if (route.path === 'teacher/setup') return renderTeacherSetup();
    if (route.path === 'teacher/audit') return renderTeacherAudit();
    renderHome();
  }

  async function refreshStudent() {
    if (!state.student) return;
    try {
      const r = await API.signin(state.student.name, state.student.number);
      if (r.ok) { state.student = r.student; state.config = r.config; renderSection(); }
    } catch (_) {}
  }

  (async function init() {
    await loadSheetsData();
    const saved = localStorage.getItem('annuities.student.v1');
    if (saved && parseRoute().path === 'home') {
      try {
        const p = JSON.parse(saved);
        const r = await API.signin(p.name, p.number);
        if (r.ok) {
          state.student = r.student; state.config = r.config;
          if (window.location.hash !== '#section') window.location.hash = '#section';
        }
      } catch (_) {}
    } else {
      try { const r = await API.getConfig(); if (r && r.ok) state.config = r.config; } catch (_) {}
    }
    state.route = parseRoute();
    render(); refreshConnBanner(); startPingLoop();
  })();
})();
