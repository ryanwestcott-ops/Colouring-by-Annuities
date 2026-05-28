/**
 * Test.gs — minimal sanity tests. Run `runAllTests` from the GAS editor.
 */

function runAllTests() {
  const results = [];
  function assert(name, cond, detail) {
    results.push({ name: name, pass: !!cond, detail: detail || '' });
  }

  // SHEETS_DATA shape
  assert('SHEETS_DATA has 16 sheets', Object.keys(SHEETS_DATA.sheets).length === 16);
  Object.keys(SHEETS_DATA.sheets).forEach(sid => {
    const s = SHEETS_DATA.sheets[sid];
    assert(sid + ' has 12 questions', s.questions.length === 12);
    assert(sid + ' has 100-cell grid', s.grid.length === 100);
  });

  // Assignment is deterministic for a given (existing-state, number)
  assert('Assignment returns valid section',
    Object.keys(SHEETS_DATA.sheets).indexOf(Assignment.assignSheetFor('1234567')) >= 0);

  // Hints
  const q = SHEETS_DATA.sheets.A1.questions[0];
  assert('Hint level 1 non-empty', Hints.render(q, 1).length > 0);
  assert('Hint level 2 mentions PMT', Hints.render(q, 2).indexOf('PMT') >= 0);
  assert('Hint level 3 has TVM table', Hints.render(q, 3).indexOf('Solving for') >= 0);
  assert('Hint cost: L1=0', Hints.costFor(1) === 0);
  assert('Hint cost: L2=1', Hints.costFor(2) === 1);
  assert('Hint cost: L3=2', Hints.costFor(3) === 2);

  // Compute the FV answer of A1.1 ourselves and confirm it matches stored
  const i = q.rate / 100 / q.cy;
  const n = q.years * q.cy;
  const fv = q.pmt * (Math.pow(1 + i, n) - 1) / i;
  assert('A1.1 computed FV within $0.01',
    Math.abs(fv - q.answer) < 0.01, 'computed=' + fv + ' stored=' + q.answer);

  console.log(JSON.stringify(results, null, 2));
  const failed = results.filter(r => !r.pass);
  console.log('PASS: ' + (results.length - failed.length) + ' / ' + results.length);
  failed.forEach(f => console.log('FAIL: ' + f.name + (f.detail ? ' — ' + f.detail : '')));
  return results;
}

/** Backup snapshot (per addendum Phase 10). Schedule via a time-based trigger. */
function backupSnapshot() {
  try {
    const id = PropertiesService.getScriptProperties().getProperty('AUDIT_SHEET_ID');
    if (!id) return;
    const ss = SpreadsheetApp.openById(id);
    const ts = Utilities.formatDate(new Date(), 'America/Toronto', "yyyy-MM-dd_HH-mm");
    const copy = ss.copy('Annuities Mosaic backup ' + ts);
    // Also dump the student list as JSON into a new sheet of that copy.
    const data = Storage.listStudents();
    const sh = copy.insertSheet('students_snapshot');
    sh.appendRow(['number', 'section', 'json']);
    data.forEach(s => sh.appendRow([s.number, s.sheetId, JSON.stringify(s)]));
  } catch (err) {
    console.error('backupSnapshot failed:', err);
  }
}

/** Install the 5-minute backup trigger. Run once from the editor. */
function installBackupTrigger() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'backupSnapshot')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('backupSnapshot').timeBased().everyMinutes(5).create();
}
