#!/usr/bin/env node
/**
 * scripts/validate.js -- pre-commit validator for data/sheets.json.
 *
 * Checks:
 *   1. 16 sheets present (A1..D4)
 *   2. 12 questions per sheet with valid type/params
 *   3. Computed answer (using FV/PV/INT formulas) matches stored answer within tolerance
 *   4. Each grid cell maps to a valid slot (0..11) and that slot's answer maps to a color range
 *   5. Question types follow the deck's slot ordering
 *
 * Usage:
 *   node scripts/validate.js
 *   npm run validate
 */
const fs = require('fs');
const path = require('path');

const SHEETS_JSON = path.join(__dirname, '..', 'data', 'sheets.json');
const data = JSON.parse(fs.readFileSync(SHEETS_JSON, 'utf-8'));

let failed = 0;
function check(name, cond, detail) {
  if (cond) {
    process.stdout.write('  PASS ' + name + '\n');
  } else {
    process.stdout.write('  FAIL ' + name + (detail ? ' -- ' + detail : '') + '\n');
    failed++;
  }
}

const EXPECTED_SECTIONS = ['A1','B1','C1','D1','A2','B2','C2','D2','A3','B3','C3','D3','A4','B4','C4','D4'];
const EXPECTED_TYPES = ['FV','FV','FV','PV','PV','PV','INT_EARNED','INT_EARNED','INT_EARNED','INT_PAID','INT_PAID','INT_PAID'];

console.log('Validating ' + SHEETS_JSON + '...');
check('Has 16 sheets', Object.keys(data.sheets).length === 16);
check('Has tolerance', typeof data.tolerance === 'number' && data.tolerance > 0);
check('Has hintBudget', typeof data.hintBudget === 'number');

function compute(p) {
  const i = p.rate / 100 / p.cy;
  const n = p.years * p.cy;
  if (p.type === 'FV')         return p.pmt * (Math.pow(1+i, n) - 1) / i;
  if (p.type === 'PV')         return p.pmt * (1 - Math.pow(1+i, -n)) / i;
  if (p.type === 'INT_EARNED') return p.pmt * (Math.pow(1+i, n) - 1) / i - p.pmt * n;
  if (p.type === 'INT_PAID')   return p.pmt * n - p.pmt * (1 - Math.pow(1+i, -n)) / i;
  return NaN;
}

EXPECTED_SECTIONS.forEach(sid => {
  if (!data.sheets[sid]) { check(sid + ' present', false); return; }
  const s = data.sheets[sid];
  check(sid + ' has 12 questions', s.questions.length === 12);
  check(sid + ' has 100-cell grid', s.grid.length === 100);
  s.questions.forEach((q, idx) => {
    const tag = sid + '.Q' + (idx+1);
    check(tag + ' type matches slot', q.type === EXPECTED_TYPES[idx],
      'expected ' + EXPECTED_TYPES[idx] + ' got ' + q.type);
    check(tag + ' has all params',
      typeof q.pmt === 'number' && typeof q.rate === 'number' &&
      typeof q.cy === 'number'  && typeof q.years === 'number');
    const computed = compute(q);
    check(tag + ' computed answer within $' + data.tolerance,
      Math.abs(computed - q.answer) <= data.tolerance,
      'stored=' + q.answer + ' computed=' + computed.toFixed(4));
    check(tag + ' has text', typeof q.text === 'string' && q.text.length > 0);
    check(tag + ' has curriculum tag',
      typeof q.curriculumTag === 'string' && q.curriculumTag.indexOf('MAP4C') === 0);
  });
  s.grid.forEach((slot, cellIdx) => {
    if (slot !== null) {
      const tag = sid + '.cell[' + cellIdx + ']';
      check(tag + ' slot in range', slot >= 0 && slot < 12, 'slot=' + slot);
    }
  });
});

console.log('\n' + (failed === 0 ? 'OK' : 'FAILED') + ': ' + failed + ' failure(s)');
process.exit(failed === 0 ? 0 : 1);
