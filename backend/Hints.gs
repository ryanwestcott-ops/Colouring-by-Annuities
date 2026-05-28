/**
 * Hints.gs — generates the 3-level hint content for any question.
 *  Level 1: Concept (problem type, what the formula does)
 *  Level 2: Variables (the i and n setup, plus subtraction step for INT)
 *  Level 3: TVM Solver inputs (exact N/I/PV/PMT/FV/P/Y/C/Y values)
 *
 * Hint costs per addendum:
 *   Level 1 -> 0
 *   Level 2 -> 1
 *   Level 3 -> 2
 */
const Hints = (function () {
  function costFor(level) {
    if (level === 1) return 0;
    if (level === 2) return 1;
    if (level === 3) return 2;
    return 0;
  }

  function _typeName(t) {
    return { FV: 'Future Value', PV: 'Present Value',
             INT_EARNED: 'Total Interest Earned',
             INT_PAID: 'Total Interest Paid' }[t] || t;
  }

  function level1(q) {
    if (q.type === 'FV') {
      return '<p><strong>This is a Future Value (FV) problem.</strong> ' +
             'You\'re finding what an annuity is worth at the END of the term.</p>' +
             '<p>Formula: <code>FV = PMT × ((1 + i)<sup>n</sup> − 1) / i</code></p>';
    }
    if (q.type === 'PV') {
      return '<p><strong>This is a Present Value (PV) problem.</strong> ' +
             'You\'re finding what an annuity is worth at the START of the term.</p>' +
             '<p>Formula: <code>PV = PMT × (1 − (1 + i)<sup>−n</sup>) / i</code></p>';
    }
    if (q.type === 'INT_EARNED') {
      return '<p><strong>This is an Interest Earned problem.</strong> ' +
             'Find FV first, then subtract the total deposits.</p>' +
             '<p>Step 1: <code>FV = PMT × ((1 + i)<sup>n</sup> − 1) / i</code><br>' +
             'Step 2: <code>Interest = FV − (PMT × N)</code></p>';
    }
    if (q.type === 'INT_PAID') {
      return '<p><strong>This is an Interest Paid problem.</strong> ' +
             'Find PV (the amount borrowed) first, then total payments minus PV.</p>' +
             '<p>Step 1: <code>PV = PMT × (1 − (1 + i)<sup>−n</sup>) / i</code><br>' +
             'Step 2: <code>Interest = (PMT × N) − PV</code></p>';
    }
    return '';
  }

  function level2(q) {
    const i = q.rate / 100 / q.cy;
    const n = q.years * q.cy;
    let html = '<p><strong>Set up your variables:</strong></p><ul>' +
      '<li>PMT = $' + q.pmt.toFixed(2) + '</li>' +
      '<li>Annual rate = ' + q.rate + '%</li>' +
      '<li>Compounding periods per year (C/Y) = ' + q.cy + '</li>' +
      '<li>Periodic rate i = ' + q.rate + ' / 100 / ' + q.cy + ' = ' + i.toFixed(8) + '</li>' +
      '<li>Number of payments n = ' + q.years + ' × ' + q.cy + ' = ' + n + '</li>' +
      '</ul>';
    if (q.type === 'INT_EARNED' || q.type === 'INT_PAID') {
      html += '<p>Total payments = PMT × N = $' + q.pmt.toFixed(2) + ' × ' + n +
              ' = $' + (q.pmt * n).toFixed(2) + '. ' +
              'You\'ll subtract from this (or from FV) to get the interest.</p>';
    }
    return html;
  }

  function level3(q) {
    const n = q.years * q.cy;
    let solveFor, pv = 0, fv = 0;
    if (q.type === 'FV' || q.type === 'INT_EARNED') { solveFor = 'FV'; pv = 0; }
    else { solveFor = 'PV'; fv = 0; }
    let html = '<p><strong>TVM Solver inputs:</strong></p>' +
               '<table class="tvm-hint"><tbody>' +
               '<tr><td>Solving for</td><td><strong>' + solveFor + '</strong></td></tr>' +
               '<tr><td>N</td><td>' + n + '</td></tr>' +
               '<tr><td>I/Y</td><td>' + q.rate + '</td></tr>' +
               '<tr><td>PV</td><td>' + pv + '</td></tr>' +
               '<tr><td>PMT</td><td>' + q.pmt.toFixed(2) + '</td></tr>' +
               '<tr><td>FV</td><td>' + fv + '</td></tr>' +
               '<tr><td>P/Y</td><td>' + q.cy + '</td></tr>' +
               '<tr><td>C/Y</td><td>' + q.cy + '</td></tr>' +
               '</tbody></table>';
    if (q.type === 'INT_EARNED') {
      html += '<p>After the TVM solver gives you FV, do <strong>FV − ' +
              (q.pmt * n).toFixed(2) + '</strong> to get the interest earned.</p>';
    } else if (q.type === 'INT_PAID') {
      html += '<p>After the TVM solver gives you PV, do <strong>' +
              (q.pmt * n).toFixed(2) + ' − PV</strong> to get the interest paid.</p>';
    }
    return html;
  }

  function render(q, level) {
    if (level === 1) return level1(q);
    if (level === 2) return level2(q);
    if (level === 3) return level3(q);
    return '';
  }

  return { costFor, render };
})();
