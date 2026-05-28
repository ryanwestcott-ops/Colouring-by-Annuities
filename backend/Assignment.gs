/**
 * Assignment.gs — least-claimed-section assignment with deterministic
 * tiebreak by hash(number). Keeps class evenly distributed across all 16
 * worksheets.
 */
const Assignment = (function () {

  function hashCode(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) - h) + s.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function listSections() {
    return Object.keys(SHEETS_DATA.sheets); // ["A1","B1","C1","D1","A2",...]
  }

  function assignSheetFor(number) {
    const sections = listSections();
    const counts = Storage.sectionCounts();
    sections.forEach(s => { if (counts[s] === undefined) counts[s] = 0; });
    // Find min count
    let min = Infinity;
    sections.forEach(s => { if (counts[s] < min) min = counts[s]; });
    const candidates = sections.filter(s => counts[s] === min);
    // Deterministic tiebreak
    const h = hashCode(String(number));
    return candidates[h % candidates.length];
  }

  return { assignSheetFor };
})();
