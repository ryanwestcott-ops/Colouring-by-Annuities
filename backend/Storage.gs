/**
 * Storage.gs — Properties-Service-backed per-student records, with audit log
 * appended to a Google Sheet (created on first use).
 *
 * Keys:
 *   student.<number>  -> JSON student record
 *   student_index     -> JSON [numbers...]  (so we can list)
 *   AUDIT_SHEET_ID    -> stored id of the audit Spreadsheet
 *   BACKUP_FOLDER_ID  -> optional drive folder for periodic snapshots
 */

const Storage = (function () {
  const sp = () => PropertiesService.getScriptProperties();

  function _index() {
    const raw = sp().getProperty('student_index');
    if (!raw) return [];
    try { return JSON.parse(raw); } catch (_) { return []; }
  }
  function _setIndex(arr) {
    sp().setProperty('student_index', JSON.stringify(arr));
  }

  function getStudent(number) {
    const raw = sp().getProperty('student.' + number);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (_) { return null; }
  }

  function putStudent(s) {
    sp().setProperty('student.' + s.number, JSON.stringify(s));
    const idx = _index();
    if (idx.indexOf(s.number) < 0) { idx.push(s.number); _setIndex(idx); }
  }

  function deleteStudent(number) {
    sp().deleteProperty('student.' + number);
    const idx = _index().filter(n => n !== number);
    _setIndex(idx);
  }

  function listStudents() {
    const idx = _index();
    const out = [];
    idx.forEach(n => {
      const s = getStudent(n);
      if (s) out.push(s);
    });
    return out;
  }

  function deleteAll() {
    const idx = _index();
    idx.forEach(n => sp().deleteProperty('student.' + n));
    _setIndex([]);
  }

  function sectionCounts() {
    const counts = {};
    listStudents().forEach(s => {
      counts[s.sheetId] = (counts[s.sheetId] || 0) + 1;
    });
    return counts;
  }

  return { getStudent, putStudent, deleteStudent, listStudents, deleteAll, sectionCounts };
})();

const Audit = (function () {
  const HEADER = ['ts', 'iso', 'number', 'section', 'event', 'qIndex', 'level', 'value', 'attempts', 'extra'];

  function _sheet() {
    const sp = PropertiesService.getScriptProperties();
    let id = sp.getProperty('AUDIT_SHEET_ID');
    let ss;
    if (id) {
      try { ss = SpreadsheetApp.openById(id); } catch (_) { id = null; }
    }
    if (!id) {
      ss = SpreadsheetApp.create('Annuities Mosaic — Audit Log');
      id = ss.getId();
      sp.setProperty('AUDIT_SHEET_ID', id);
      const sh = ss.getActiveSheet();
      sh.setName('audit');
      sh.appendRow(HEADER);
    }
    return ss.getSheetByName('audit') || ss.getActiveSheet();
  }

  function append(evt) {
    try {
      const sh = _sheet();
      const ts = evt.ts || Date.now();
      sh.appendRow([
        ts, new Date(ts).toISOString(),
        evt.number || '', evt.section || '', evt.event || '',
        evt.qIndex !== undefined ? evt.qIndex : '',
        evt.level !== undefined ? evt.level : '',
        evt.value !== undefined ? evt.value : '',
        evt.attempts !== undefined ? evt.attempts : '',
        JSON.stringify(Object.assign({}, evt, { ts: undefined, number: undefined, section: undefined, event: undefined, qIndex: undefined, level: undefined, value: undefined, attempts: undefined }))
      ]);
    } catch (err) {
      console.error('Audit.append failed:', err);
    }
  }

  function read(since) {
    const sh = _sheet();
    const data = sh.getDataRange().getValues();
    const out = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (Number(row[0]) >= (since || 0)) {
        out.push({
          ts: row[0], iso: row[1], number: row[2], section: row[3],
          event: row[4], qIndex: row[5], level: row[6], value: row[7], attempts: row[8],
          extra: row[9]
        });
      }
    }
    return out;
  }

  return { append, read };
})();
