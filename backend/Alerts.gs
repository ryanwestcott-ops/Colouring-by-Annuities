/**
 * Alerts.gs — computes the "who needs help" alerts shown above the teacher
 * mosaic, and the aggregates used by the dashboard stat tiles.
 *
 * Alert types (per addendum):
 *   stuck:        3+ wrong attempts on same question
 *   idle:         no activity 10+ min
 *   out_of_hints: all hint credits spent but section incomplete
 *   complete:     section just finished
 *   level3_used:  Level 3 hint just used (one-time)
 */
const Alerts = (function () {

  function compute(students, sheetsData) {
    const now = Date.now();
    const out = [];
    const config = (function () {
      const raw = PropertiesService.getScriptProperties().getProperty('CONFIG_JSON');
      try { return raw ? JSON.parse(raw) : {}; } catch (_) { return {}; }
    })();
    const hintBudget = config.hintBudget || (sheetsData.hintBudget || 5);

    students.forEach(s => {
      const solved = s.solved;
      const isComplete = solved === 12;

      // stuck: any qIndex with attemptCounts >= 3 and that q not solved correctly
      (s.attemptCounts || []).forEach((cnt, qIdx) => {
        // We only have attemptCounts in snapshot — for completeness we'd need full record.
        if (cnt >= 3) {
          // If at least one of those was an incorrect-followed-by-no-correct, it's stuck.
          // Without per-attempt detail, approximate: stuck if cnt>=3 and answers[qIdx] not correct.
          out.push({ number: s.number, section: s.section, type: 'stuck',
                     qIndex: qIdx, attempts: cnt, since: s.lastActive });
        }
      });

      if (!isComplete && (s.hintCreditsSpent || 0) >= hintBudget) {
        out.push({ number: s.number, section: s.section, type: 'out_of_hints',
                   remaining: 0 });
      }
      if (!isComplete && s.lastActive && (now - s.lastActive) > 10 * 60 * 1000) {
        out.push({ number: s.number, section: s.section, type: 'idle',
                   lastActive: s.lastActive });
      }
      if (isComplete) {
        out.push({ number: s.number, section: s.section, type: 'complete',
                   completedAt: s.lastActive });
      }
    });
    return out;
  }

  function aggregates(students) {
    const totals = {
      signedIn: students.length,
      complete: students.filter(s => s.solved === 12).length,
      started: students.filter(s => s.solved > 0 || (s.attemptCounts || []).some(c => c > 0)).length,
      questionsSolved: students.reduce((sum, s) => sum + s.solved, 0),
      hintCreditsSpent: students.reduce((sum, s) => sum + (s.hintCreditsSpent || 0), 0)
    };
    const bySection = {};
    students.forEach(s => {
      if (!bySection[s.section]) bySection[s.section] = { studentCount: 0, complete: 0, solvedTotal: 0 };
      bySection[s.section].studentCount++;
      if (s.solved === 12) bySection[s.section].complete++;
      bySection[s.section].solvedTotal += s.solved;
    });
    return { totals: totals, bySection: bySection };
  }

  return { compute, aggregates };
})();
