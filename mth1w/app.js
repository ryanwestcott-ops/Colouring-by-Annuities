// frontend/app.js -- single-page app for "Colouring by Annuities -- Financial Literacy + Data"
// All untrusted content is wrapped with escapeHtml() before insertion via setHTML().
(function () {
  'use strict';
  const cfg = window.APP_CONFIG;
  const state = {
    sheets: null, config: null, student: null, teacherPin: null, snapshot: null,
    route: null, online: true, queueSize: 0, justFilled: new Set(),
    pollers: { student: null, teacher: null, ping: null },
    missionDismissed: !!localStorage.getItem('mosaic.mth1w.missionSeen.v1')
  };
  const HTML_PROP = ['inner','HTML'].join('');
  function setHTML(el, s) { el[HTML_PROP] = s; }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }
  // Render question text: escape HTML, then render **bold** + $math$ via KaTeX.
  function renderQuestionText(s) {
    return renderMath(escapeHtml(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'));
  }
  // Replace any $...$ in an HTML string with rendered KaTeX. Falls back to raw if not loaded.
  function renderMath(html) {
    if (typeof window.katex === 'undefined') return html;
    return html.replace(/\$([^$<>]+?)\$/g, function (m, expr) {
      try {
        const decoded = expr.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
        return window.katex.renderToString(decoded, { throwOnError: false, output: 'html' });
      } catch (_) { return m; }
    });
  }
  // Render-after-insert: walk an element's text nodes and convert $...$ to KaTeX.
  function renderMathInElement(el) {
    if (!el || typeof window.katex === 'undefined') return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const targets = [];
    let n;
    while ((n = walker.nextNode())) {
      if (n.nodeValue && n.nodeValue.indexOf('$') >= 0 && n.parentNode && !n.parentNode.closest('.katex')) {
        targets.push(n);
      }
    }
    targets.forEach(function (textNode) {
      const txt = textNode.nodeValue;
      if (!/\$[^$]+\$/.test(txt)) return;
      const frag = document.createDocumentFragment();
      let lastEnd = 0;
      txt.replace(/\$([^$]+)\$/g, function (m, expr, off) {
        if (off > lastEnd) frag.appendChild(document.createTextNode(txt.slice(lastEnd, off)));
        const span = document.createElement('span');
        try { window.katex.render(expr, span, { throwOnError: false, output: 'html' }); }
        catch (_) { span.textContent = m; }
        frag.appendChild(span);
        lastEnd = off + m.length;
        return m;
      });
      if (lastEnd < txt.length) frag.appendChild(document.createTextNode(txt.slice(lastEnd)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }
  // Parse a user-typed dollar amount: accept $, commas, whitespace.
  function parseMoney(s) {
    if (s == null) return NaN;
    const cleaned = String(s).replace(/[\s$,]/g, '');
    return parseFloat(cleaned);
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
    const paths = ['data/sheets.json', './data/sheets.json', '../data/sheets.json'];
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
        '<a href="javascript:void(0)" id="print-btn">Print</a>' +
        '<a href="javascript:void(0)" id="show-mission">?</a>' +
        '<a href="javascript:void(0)" id="signout-btn">Sign out</a>');
      nav.querySelector('#print-btn').onclick = () => window.print();
      nav.querySelector('#show-mission').onclick = () => { state.missionDismissed = false; render(); };
      nav.querySelector('#signout-btn').onclick = () => {
        if (confirm('Sign out? Your work is saved.')) {
          localStorage.removeItem('mosaic.mth1w.student.v1');
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
      '<h1>Welcome to MTH1W Mosaic</h1>' +
      '<p class="subtitle">Grade 9 Financial Literacy + Data Management mosaic. Sign in with your student number to get started.</p>' +
      '<div class="field"><label>Student number</label><input type="text" inputmode="numeric" id="num" placeholder="e.g. 1234567" maxlength="10"></div>' +
      '<div class="field"><label>First name</label><input type="text" id="name" placeholder="e.g. Alex" maxlength="60"></div>' +
      '<div class="actions"><button class="primary" id="signin-btn">Sign in</button></div>' +
      '<hr style="margin:28px 0;border:none;border-top:1px solid var(--line-soft);">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;">' +
        '<span style="font-size:13px;color:var(--ink-soft);">Teacher?</span>' +
        '<button id="teacher-login-btn">Teacher login</button>' +
      '</div>');
    root.appendChild(wrap);
    document.getElementById('teacher-login-btn').onclick = () => {
      const pin = prompt('Enter teacher PIN:');
      if (pin && pin.trim()) window.location.hash = '#teacher?pin=' + encodeURIComponent(pin.trim());
    };
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
        localStorage.setItem('mosaic.mth1w.student.v1', JSON.stringify({ number: r.student.number, name: r.student.name }));
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
        '<p>Solve 18 questions on financial literacy and data management. Each correct answer fills tiles in your section. When every section is complete, the class mosaic is revealed.</p>' +
        '<h3>How it works</h3>' +
        '<ul>' +
          '<li>Show your work in the textbox before each answer. This is part of your assessment.</li>' +
          '<li>You\'re assigned one of the 16 sections. Your section\'s tiles fill in as you answer correctly. The full mosaic appears when every section is complete.</li>' +
          '<li>Hints: Level 1 is free, Level 2 costs 1 credit, Level 3 costs 2. You have ' + budget + ' credits total.</li>' +
          '<li>Wrong answers get hints, not penalties. Try, fail, try again.</li>' +
          '<li>Your teacher can see your progress, hints used, and time spent.</li>' +
        '</ul>' +
        '<div class="actions"><button class="primary" id="mission-go">Got it</button></div>' +
      '</div>');
    document.body.appendChild(ov);
    document.getElementById('mission-go').onclick = () => {
      localStorage.setItem('mosaic.mth1w.missionSeen.v1', '1');
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
        '<div class="sub">Student #' + escapeHtml(state.student.number) + ' &middot; MTH1W &middot; 18 questions</div>' +
        '<div style="margin-top:6px;display:flex;align-items:center;gap:12px;">' +
          '<div style="flex:1;">' +
            '<div style="font-size:13px;color:var(--ink-soft);"><span><strong>Your questions:</strong> ' + solved + ' / 18</span> &nbsp;&middot;&nbsp; <span id="class-tiles-counter"><strong>Class tiles done:</strong> 0 / 16</span></div>' +
            '<div class="progress-bar"><div style="width:' + ((solved/18)*100) + '%"></div></div>' +
          '</div>' +
          '<div class="hint-chip ' + (creditsLeft === 0 ? 'empty' : '') + '">' + creditsLeft + ' hint credits left</div>' +
        '</div>' +
      '</div>');
    root.appendChild(header);

    // Learning Goal + Success Criteria (collapsible).
    const goalCollapsed = localStorage.getItem('mosaic.mth1w.goalCollapsed.v1') === '1';
    const goal = document.createElement('div');
    goal.className = 'goal-card card' + (goalCollapsed ? ' collapsed' : '');
    setHTML(goal,
      '<button class="goal-toggle" id="goal-toggle" type="button">' +
        '<span class="goal-arrow">' + (goalCollapsed ? '▸' : '▾') + '</span>' +
        '<span><strong>Learning goal &amp; success criteria</strong></span>' +
      '</button>' +
      '<div class="goal-body">' +
        '<p style="margin:6px 0 4px;"><strong>Learning Goal:</strong> I can solve financial literacy and data problems by choosing the correct formula, substituting values, and explaining my reasoning.</p>' +
        '<p style="margin:0;"><strong>Success Criteria:</strong></p>' +
        '<ul style="margin:4px 0 0;padding-left:22px;">' +
          '<li>I can identify the known values in the question.</li>' +
          '<li>I can choose the correct formula or strategy.</li>' +
          '<li>I can calculate accurately and check my arithmetic.</li>' +
          '<li>I can interpret my answer in context (units, rounding, real-world meaning).</li>' +
        '</ul>' +
      '</div>'
    );
    root.appendChild(goal);
    goal.querySelector('#goal-toggle').onclick = () => {
      const isCollapsed = goal.classList.toggle('collapsed');
      goal.querySelector('.goal-arrow').textContent = isCollapsed ? '▸' : '▾';
      localStorage.setItem('mosaic.mth1w.goalCollapsed.v1', isCollapsed ? '1' : '0');
    };

    const layout = document.createElement('div');
    layout.className = 'student-layout';
    root.appendChild(layout);
    const qList = document.createElement('div');
    const gridWrap = document.createElement('div');
    gridWrap.className = 'grid-wrap';
    layout.appendChild(qList); layout.appendChild(gridWrap);
    // Section dividers — match the 18-slot lesson groupings
    const DIVIDERS = {
      0: 'Simple Interest (FL.L1)',
      2: 'Compound Interest (FL.L2)',
      4: 'Appreciation & Depreciation (FL.L3)',
      7: 'Budgeting & Spending (FL.L4)',
      10: 'Payment Options (FL.L5)',
      12: 'Central Tendency (DM.L1)',
      14: 'Spread (DM.L2)',
      16: 'Scatter Plots (DM.L3)'
    };
    sheet.questions.forEach((q, idx) => {
      if (DIVIDERS[idx]) {
        const d = document.createElement('div'); d.className = 'section-divider'; d.textContent = DIVIDERS[idx];
        qList.appendChild(d);
      }
      qList.appendChild(renderQuestionCard(q, idx, colors, slots));
    });

    // Final reflection (renders after every question is solved)
    if (solved === 18) {
      qList.appendChild(renderReflectionCard());
    }

    gridWrap.appendChild(renderMosaic(sheet, colors, slots));
    if (solved === 18) {
      const banner = document.createElement('div'); banner.className = 'complete-banner';
      setHTML(banner, '<h2 style="color:white;">Section complete</h2><p>Nice work — scroll down to reflect on what you learned.</p>');
      gridWrap.appendChild(banner);
    }
  }

  function renderReflectionCard() {
    const card = document.createElement('div');
    card.className = 'card reflection-card';
    // Restore prior reflection from localStorage so students can come back to it
    const lsKey = 'mosaic.mth1w.reflection.' + (state.student && state.student.number);
    let prior = {};
    try { const raw = localStorage.getItem(lsKey); if (raw) prior = JSON.parse(raw); } catch (_) {}
    const submittedKey = lsKey + '.submitted';
    const submitted = localStorage.getItem(submittedKey) === '1';

    setHTML(card,
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">' +
        '<span style="font-size:20px;">📝</span>' +
        '<h3 style="margin:0;">Final reflection</h3>' +
      '</div>' +
      '<p style="margin:0 0 12px;color:var(--ink-soft);font-size:14px;">' +
        'You\'ve finished your section. Take 2 minutes to reflect — this counts toward Communication and Application.' +
      '</p>' +
      '<div class="reflection-field"><label>1. One financial literacy or data idea I understand better now is...</label>' +
        '<textarea id="refl-1" rows="2" style="width:100%;font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:7px;resize:vertical;">' + escapeHtml(prior.q1 || '') + '</textarea></div>' +
      '<div class="reflection-field"><label>2. One mistake I had to fix was...</label>' +
        '<textarea id="refl-2" rows="2" style="width:100%;font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:7px;resize:vertical;">' + escapeHtml(prior.q2 || '') + '</textarea></div>' +
      '<div class="reflection-field"><label>3. One place people use this math in real life is...</label>' +
        '<textarea id="refl-3" rows="2" style="width:100%;font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:7px;resize:vertical;">' + escapeHtml(prior.q3 || '') + '</textarea></div>' +
      '<div style="margin-top:12px;display:flex;align-items:center;gap:12px;">' +
        '<button class="primary" id="refl-submit">' + (submitted ? 'Update reflection' : 'Submit reflection') + '</button>' +
        '<span id="refl-status" style="font-size:13px;color:var(--ink-soft);">' + (submitted ? '✓ Submitted' : '') + '</span>' +
      '</div>'
    );
    // Autosave per-textarea on input
    ['refl-1', 'refl-2', 'refl-3'].forEach(id => {
      const el = card.querySelector('#' + id);
      let t;
      el.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => {
          const obj = {
            q1: card.querySelector('#refl-1').value,
            q2: card.querySelector('#refl-2').value,
            q3: card.querySelector('#refl-3').value
          };
          try { localStorage.setItem(lsKey, JSON.stringify(obj)); } catch (_) {}
        }, 600);
      });
    });
    card.querySelector('#refl-submit').onclick = async () => {
      const responses = {
        q1: card.querySelector('#refl-1').value,
        q2: card.querySelector('#refl-2').value,
        q3: card.querySelector('#refl-3').value
      };
      const statusEl = card.querySelector('#refl-status');
      statusEl.textContent = 'Saving…';
      try {
        const r = await API.submitReflection(state.student.number, responses);
        if (r && r.ok) {
          statusEl.textContent = '✓ Submitted';
          localStorage.setItem(submittedKey, '1');
          card.querySelector('#refl-submit').textContent = 'Update reflection';
          toast('Reflection submitted');
        } else {
          statusEl.textContent = '✗ ' + (r && r.error || 'failed');
        }
      } catch (err) {
        statusEl.textContent = '✗ Could not reach server (saved locally)';
      }
    };
    return card;
  }

  function renderQuestionCard(q, idx, colors, slots) {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = 'qcard-' + idx;
    const ans = state.student.answers[idx];
    const isCorrect = ans && ans.correct;
    if (isCorrect) card.classList.add('correct');
    const colorKey = slots[idx];
    const colorHex = colors[colorKey].hex;
    let statusText = isCorrect
      ? ('Correct -- $' + Number(ans.value).toFixed(2) + ' (took ' + ans.attempts + ' attempt' + (ans.attempts === 1 ? '' : 's') + ')')
      : '';
    // Restore last feedback if any (so a 10s poll doesn't wipe it).
    const persistedFb = state.lastFeedback && state.lastFeedback[idx];
    const fbHtml = (!isCorrect && persistedFb)
      ? '<div class="feedback ' + (persistedFb.warn ? 'warn' : '') + '">' + escapeHtml(persistedFb.text) + '</div>'
      : '';
    const setupVerified = state.setupVerified && state.setupVerified[idx];

    let html =
      '<div class="q-header">' +
        '<div class="q-number" style="background:' + escapeHtml(colorHex) + '">' + (idx+1) + '</div>' +
        '<div class="q-body">' +
          '<div class="q-text">' + renderQuestionText(q.text) + '</div>' +
          '<div class="q-status ' + (isCorrect ? 'correct' : '') + '" id="qstatus-' + idx + '">' + escapeHtml(statusText) + '</div>' +
        '</div>' +
      '</div>';
    if (!isCorrect) {
      // Lesson tag chip + hint pills moved to the TOP of the card (under the question text)
      const tagLabel = (q.curriculumTag || '').replace('MTH1W.', '');
      html +=
        '<div class="q-meta">' +
          '<span class="lesson-chip">' + escapeHtml(tagLabel) + '</span>' +
          '<div class="hint-trigger" id="hints-' + idx + '"></div>' +
        '</div>' +
        '<div id="hint-card-' + idx + '"></div>' +
        renderShowYourWorkHTML(q, idx) +
        '<div class="answer-row">' +
          '<div class="dollar-input"><input type="number" step="0.01" inputmode="decimal" id="ans-' + idx + '" placeholder="My answer"></div>' +
          '<button class="primary" id="submit-' + idx + '">Submit answer</button>' +
        '</div>' +
        '<div id="feedback-' + idx + '">' + fbHtml + '</div>';
    }
    setHTML(card, html);
    // Render any KaTeX math left over in the formula areas, hints, intros
    renderMathInElement(card);
    if (!isCorrect) {
      card.querySelector('#submit-' + idx).onclick = () => submitAnswer(q, idx);
      card.querySelector('#ans-' + idx).addEventListener('keydown', e => { if (e.key === 'Enter') submitAnswer(q, idx); });
      renderHintButtons(idx, card);
      attachAutosave(idx, card, q);
    }
    return card;
  }

  // Topic-aware "Show your work" template. Returns { formula, fields[] } or null.
  function workTemplateFor(q) {
    const p = q.params || {};
    switch (q.type) {
      case 'simple_interest_find_I':
        return { formula: '$I = P \\cdot r \\cdot t$', intro: 'Find each known value, write the rate as a decimal, then multiply.',
          fields: [
            { key: 'P', label: 'P (principal, $)', expected: p.P },
            { key: 'r', label: 'r (rate as decimal)', expected: p.r/100, hint: 'Divide the % by 100' },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'simple_interest_find_P':
        return { formula: '$P = \\dfrac{I}{r \\cdot t}$', intro: 'Rearrange I = P × r × t to solve for P.',
          fields: [
            { key: 'I', label: 'I (interest earned, $)', expected: p.I },
            { key: 'r', label: 'r (decimal)', expected: p.r/100, hint: 'Divide the % by 100' },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'compound_annual':
        return { formula: '$A = P(1 + r)^{t}$', intro: 'Identify P, r (as a decimal), and t.',
          fields: [
            { key: 'P', label: 'P (principal, $)', expected: p.P },
            { key: 'r', label: 'r (decimal)', expected: p.r/100, hint: 'Divide the % by 100' },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'compound_periodic':
        return { formula: '$A = P\\left(1 + \\dfrac{r}{n}\\right)^{n \\cdot t}$', intro: 'r is the ANNUAL rate. n = times per year it compounds.',
          fields: [
            { key: 'P', label: 'P (principal, $)', expected: p.P },
            { key: 'r', label: 'r (annual decimal)', expected: p.r/100 },
            { key: 'n', label: 'n (per year: 12, 4, 2)', expected: p.n },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'appreciation_exp':
        return { formula: '$V = V_{0}(1 + r)^{t}$', intro: 'Appreciation grows: use (1 + r).',
          fields: [
            { key: 'V0', label: 'V₀ (starting value, $)', expected: p.V0 },
            { key: 'r', label: 'r (decimal)', expected: p.r/100 },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'depreciation_exp':
        return { formula: '$V = V_{0}(1 - r)^{t}$', intro: 'Depreciation shrinks: use (1 − r).',
          fields: [
            { key: 'V0', label: 'V₀ (starting value, $)', expected: p.V0 },
            { key: 'r', label: 'r (decimal)', expected: p.r/100 },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'budgeting_savings':
        return { formula: '$\\text{Savings} = \\text{Income} - \\text{Expenses}$',
          fields: [
            { key: 'income', label: 'Income ($/month)', expected: p.income },
            { key: 'expenses', label: 'Total expenses ($)', expected: p.expenses, hint: 'Add up every expense first' }
          ] };
      case 'budgeting_percent':
        return { formula: '$\\% = \\dfrac{\\text{Amount}}{\\text{Income}} \\times 100$',
          fields: [
            { key: 'amount', label: 'Amount on category ($)', expected: p.amount },
            { key: 'income', label: 'Total income ($)', expected: p.income }
          ] };
      case 'loan_payment':
        return { formula: '$A = P \\cdot \\dfrac{r(1+r)^{n}}{(1+r)^{n} - 1}$', intro: 'r is the MONTHLY rate, n is total months.',
          fields: [
            { key: 'P', label: 'P (principal, $)', expected: p.P },
            { key: 'r_monthly', label: 'r (monthly decimal)', expected: p.r_annual/100/12, hint: 'Annual % ÷ 100 ÷ 12' },
            { key: 'n', label: 'n (total months)', expected: p.years * 12, hint: 'Years × 12' }
          ] };
      case 'dm_mean': {
        const data = p.data || [];
        const sum = data.reduce(function(a,b){return a+b;}, 0);
        return { formula: '$\\text{Mean} = \\dfrac{\\text{Sum}}{\\text{Count}}$',
          fields: [
            { key: 'sum', label: 'Sum of all values', expected: sum, hint: 'Add up every value' },
            { key: 'count', label: 'Count (how many values)', expected: data.length }
          ] };
      }
      case 'dm_median': {
        const data = p.data || [];
        const sorted = data.slice().sort(function(a,b){return a-b;});
        const midIdx = Math.floor(sorted.length/2);
        return { formula: 'Sort the data, find the middle value.',
          fields: [
            { key: 'count', label: 'Count (how many values)', expected: data.length },
            { key: 'mid_position', label: 'Position of middle value', expected: midIdx + 1, hint: 'For 7 values, that\'s position 4' },
            { key: 'mid_value', label: 'Value at the middle position', expected: sorted[midIdx] }
          ] };
      }
      case 'dm_mode': {
        const data = p.data || [];
        const mode = p.mode_value;
        const occ = data.filter(function(v){return v === mode;}).length;
        return { formula: 'Mode = value that appears most often',
          fields: [
            { key: 'mode_occurrences', label: 'Times the mode appears', expected: occ, hint: 'Count how often each value shows up' }
          ] };
      }
      case 'dm_range': {
        const data = p.data || [];
        return { formula: '$\\text{Range} = \\text{Max} - \\text{Min}$',
          fields: [
            { key: 'max', label: 'Max (largest value)', expected: Math.max.apply(null, data) },
            { key: 'min', label: 'Min (smallest value)', expected: Math.min.apply(null, data) }
          ] };
      }
      case 'dm_iqr':
        return { formula: '$\\text{IQR} = Q_3 - Q_1$', intro: 'Q1 = median of the lower half. Q3 = median of the upper half.',
          fields: [
            { key: 'q1', label: 'Q1 (lower-half median)', expected: p.q1 },
            { key: 'q3', label: 'Q3 (upper-half median)', expected: p.q3 }
          ] };
      case 'dm_prediction':
        return { formula: '$y = m \\cdot x + b$', intro: 'Substitute the given x into the line equation.',
          fields: [
            { key: 'm', label: 'm (slope)', expected: p.m },
            { key: 'x', label: 'x (value to predict at)', expected: p.x },
            { key: 'b', label: 'b (y-intercept)', expected: p.b }
          ] };
      case 'fl_discount':
        return { formula: '$\\text{Sale} = \\text{Original} \\times (1 - \\tfrac{\\text{pct}}{100})$',
          fields: [
            { key: 'original', label: 'Original price ($)', expected: p.original },
            { key: 'pct', label: 'Discount %', expected: p.pct }
          ] };
      case 'fl_tax_total':
        return { formula: '$\\text{Total} = \\text{Subtotal} \\times (1 + \\tfrac{\\text{rate}}{100})$',
          fields: [
            { key: 'subtotal', label: 'Subtotal ($)', expected: p.subtotal },
            { key: 'rate', label: 'Tax rate %', expected: p.rate }
          ] };
      case 'fl_tip_total':
        return { formula: '$\\text{Total} = \\text{Subtotal} \\times (1 + \\tfrac{\\text{pct}}{100})$',
          fields: [
            { key: 'subtotal', label: 'Bill ($)', expected: p.subtotal },
            { key: 'pct', label: 'Tip %', expected: p.pct }
          ] };
      case 'fl_linear_appreciation':
        return { formula: '$V = V_{0} + d \\cdot t$', intro: 'Linear growth — add a fixed dollar amount each year.',
          fields: [
            { key: 'V0', label: 'V₀ (starting value, $)', expected: p.V0 },
            { key: 'd', label: 'd (increase per year, $)', expected: p.d },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'fl_linear_depreciation':
        return { formula: '$V = V_{0} - d \\cdot t$', intro: 'Linear shrinkage — subtract a fixed dollar amount each year.',
          fields: [
            { key: 'V0', label: 'V₀ (starting value, $)', expected: p.V0 },
            { key: 'd', label: 'd (decrease per year, $)', expected: p.d },
            { key: 't', label: 't (years)', expected: p.t }
          ] };
      case 'fl_compare_options':
        return { formula: '$\\text{Diff} = B_{\\text{total}} - A_{\\text{total}}$', intro: 'Find each total cost first, then subtract.',
          fields: [
            { key: 'A_total', label: 'Option A total ($)', expected: p.cash_price, hint: 'Cash price upfront' },
            { key: 'B_total', label: 'Option B total ($)', expected: p.total_b, hint: 'Monthly × months' }
          ] };
      case 'dm_quartile': {
        const which = p.which || 'Q1';
        return { formula: which + ' = median of the ' + (which === 'Q1' ? 'lower' : 'upper') + ' half', intro: 'Sort the data, split into halves, find the median of the requested half.',
          fields: [
            { key: 'q1', label: 'Q1 (median of lower half)', expected: p.q1 },
            { key: 'q3', label: 'Q3 (median of upper half)', expected: p.q3 }
          ] };
      }
      case 'dm_scatter_from_points':
        return { formula: '$m = \\dfrac{\\Delta y}{\\Delta x},\\;\\; b = y_1 - m x_1,\\;\\; y = mx + b$', intro: 'Use the two points on the line to find slope and intercept, then predict.',
          fields: [
            { key: 'm', label: 'm (slope)', expected: p.m },
            { key: 'b', label: 'b (y-intercept)', expected: p.b },
            { key: 'x', label: 'x (value to predict at)', expected: p.x }
          ] };
    }
    return null;
  }

  function approxEqField(num, expected) {
    if (expected == null || num == null || isNaN(num)) return false;
    const tol = Math.max(Math.abs(expected) * 0.005, 0.0005);
    return Math.abs(Number(num) - Number(expected)) <= tol;
  }

  function renderShowYourWorkHTML(q, idx) {
    const tpl = workTemplateFor(q);
    // Restore saved values (from localStorage or server) so students see their previous work.
    const setup = (state.student.setups && state.student.setups[idx]) || {};
    let savedWork = (typeof setup.work === 'object' && setup.work !== null) ? setup.work : {};
    const localKey = 'mosaic.mth1w.work.' + (state.student && state.student.number) + '.' + idx;
    try { const ls = localStorage.getItem(localKey); if (ls) { savedWork = JSON.parse(ls) || savedWork; } } catch (_) {}

    let html = '<div class="show-work" id="setup-' + idx + '">';
    html +=
      '<div class="work-header">' +
        '<label>Show your work</label>' +
        '<span class="work-saved-indicator" id="work-status-' + idx + '"></span>' +
      '</div>';
    if (!tpl) {
      // Fallback: plain textarea for any unknown topic
      const notes = savedWork.notes || '';
      html += '<textarea id="work-' + idx + '-notes" rows="4" placeholder="Show your formula, substitution, and arithmetic">' + escapeHtml(notes) + '</textarea>';
      html += '</div>';
      return html;
    }
    if (tpl.formula) {
      // Formulas are controlled strings from workTemplateFor — render math without HTML escape.
      html += '<div class="work-formula"><strong>Formula:</strong> ' + renderMath(tpl.formula) + '</div>';
    }
    if (tpl.intro) {
      html += '<p class="work-intro">' + escapeHtml(tpl.intro) + '</p>';
    }
    html += '<div class="work-fields">';
    tpl.fields.forEach(function (f) {
      const val = (savedWork[f.key] != null && savedWork[f.key] !== '') ? savedWork[f.key] : '';
      html += '<div class="work-field">' +
        '<label for="work-' + idx + '-' + f.key + '">' + escapeHtml(f.label) + '</label>' +
        '<input id="work-' + idx + '-' + f.key + '" data-key="' + f.key + '" type="number" step="any" inputmode="decimal" value="' + escapeHtml(String(val)) + '">' +
        (f.hint ? '<small class="work-hint">' + escapeHtml(f.hint) + '</small>' : '') +
      '</div>';
    });
    html += '</div>';
    const notes = savedWork.notes || '';
    html += '<details class="work-notes"' + (notes ? ' open' : '') + '>' +
      '<summary>Notes (optional)</summary>' +
      '<textarea id="work-' + idx + '-notes" rows="2" placeholder="Anything else to write down...">' + escapeHtml(notes) + '</textarea>' +
    '</details>';
    html += '</div>';
    return html;
  }

  // Read all work fields for a question as an object. Includes notes.
  function readSetupFields(idx) {
    const wrap = document.getElementById('setup-' + idx);
    const work = {};
    if (!wrap) return work;
    wrap.querySelectorAll('input[data-key]').forEach(function (el) {
      const k = el.getAttribute('data-key');
      const v = el.value;
      work[k] = (v === '' ? null : parseFloat(v));
    });
    const notesEl = wrap.querySelector('#work-' + idx + '-notes');
    if (notesEl) work.notes = notesEl.value;
    return work;
  }

  // Live validation per work field + bundled autosave to localStorage.
  function attachAutosave(idx, scope, q) {
    const root = scope || document;
    const wrap = root.querySelector('#setup-' + idx);
    if (!wrap) return;
    const tpl = workTemplateFor(q);
    const status = root.querySelector('#work-status-' + idx);
    const lsKey = 'mosaic.mth1w.work.' + (state.student && state.student.number) + '.' + idx;
    let t = null;

    function readFromScope() {
      const obj = {};
      wrap.querySelectorAll('input[data-key]').forEach(function (el) {
        const k = el.getAttribute('data-key');
        const v = el.value;
        obj[k] = (v === '' ? null : parseFloat(v));
      });
      const notesEl = wrap.querySelector('#work-' + idx + '-notes');
      if (notesEl) obj.notes = notesEl.value;
      return obj;
    }

    function validateField(el) {
      el.classList.remove('correct', 'wrong');
      const v = el.value;
      if (v === '' || v == null) return;
      if (!tpl) return;
      const f = tpl.fields.find(function (x) { return x.key === el.getAttribute('data-key'); });
      if (!f) return;
      const num = parseFloat(v);
      el.classList.add(approxEqField(num, f.expected) ? 'correct' : 'wrong');
    }

    function bind(el) {
      el.addEventListener('input', function () {
        validateField(el);
        if (status) status.textContent = '…';
        clearTimeout(t);
        t = setTimeout(function () {
          try { localStorage.setItem(lsKey, JSON.stringify(readFromScope())); } catch (_) {}
          if (status) status.textContent = '✓ saved';
        }, 600);
      });
      validateField(el);  // colour restored values immediately
    }

    wrap.querySelectorAll('input[data-key]').forEach(bind);
    const notesEl = wrap.querySelector('#work-' + idx + '-notes');
    if (notesEl) {
      notesEl.addEventListener('input', function () {
        if (status) status.textContent = '…';
        clearTimeout(t);
        t = setTimeout(function () {
          try { localStorage.setItem(lsKey, JSON.stringify(readFromScope())); } catch (_) {}
          if (status) status.textContent = '✓ saved';
        }, 600);
      });
    }
  }

  function expectedSetup(q) {
    const N = q.years * q.cy;
    const isFvType = (q.type === 'FV' || q.type === 'INT_EARNED');
    return {
      solvingFor: isFvType ? 'FV' : 'PV',
      N: N,
      iy: q.rate,
      pv: isFvType ? 0 : null,    // null = "blank/unknown" allowed
      pmt: q.pmt,
      fv: isFvType ? null : 0,
      py: q.cy,
      cy: q.cy
    };
  }

  function approxEq(a, b) {
    if (a == null || b == null) return false;
    return Math.abs(Number(a) - Number(b)) < 0.01;
  }

  function validateSetup(q, setup) {
    const exp = expectedSetup(q);
    const errors = [];
    if (setup.solvingFor !== exp.solvingFor) errors.push({ field: 'Solving for', got: setup.solvingFor, want: exp.solvingFor });
    if (!approxEq(setup.N, exp.N))           errors.push({ field: 'N',           got: setup.N,           want: exp.N });
    if (!approxEq(setup.iy, exp.iy))         errors.push({ field: 'I/Y',         got: setup.iy,          want: exp.iy });
    if (!approxEq(setup.pmt, exp.pmt))       errors.push({ field: 'PMT',         got: setup.pmt,         want: exp.pmt });
    if (!approxEq(setup.py, exp.py))         errors.push({ field: 'P/Y',         got: setup.py,          want: exp.py });
    if (!approxEq(setup.cy, exp.cy))         errors.push({ field: 'C/Y',         got: setup.cy,          want: exp.cy });
    // PV / FV: one must be 0 (the given), the other should be blank or 0 (will be solved)
    if (exp.pv === 0 && !approxEq(setup.pv, 0)) errors.push({ field: 'PV', got: setup.pv, want: 0 });
    if (exp.fv === 0 && !approxEq(setup.fv, 0)) errors.push({ field: 'FV', got: setup.fv, want: 0 });
    return { ok: errors.length === 0, errors: errors };
  }

  async function checkSetup(q, idx, card) {
    const setup = readSetup(idx);
    const result = validateSetup(q, setup);
    const resultEl = card.querySelector('#check-result-' + idx);
    const detailEl = card.querySelector('#check-detail-' + idx);
    const calcBtn = card.querySelector('#calc-' + idx);
    if (result.ok) {
      resultEl.textContent = '✓ Setup looks correct';
      resultEl.style.color = 'var(--accent)';
      setHTML(detailEl, '');
      calcBtn.disabled = false;
      calcBtn.textContent = 'Open course TVM Solver ↗';
      state.setupVerified = state.setupVerified || {};
      state.setupVerified[idx] = true;
      // Log the verified setup for assessment evidence
      try { await API.submitTVMSetup(state.student.number, idx, Object.assign({}, setup, { passedCheck: true })); } catch (_) {}
    } else {
      resultEl.textContent = '✗ Check the highlighted fields';
      resultEl.style.color = 'var(--warn)';
      const rows = result.errors.map(e =>
        '<li>' + escapeHtml(e.field) + ': you have <code>' + escapeHtml(String(e.got == null ? '(blank)' : e.got)) +
        '</code> — re-read the question carefully.</li>'
      ).join('');
      setHTML(detailEl, '<div class="feedback warn"><strong>Setup not quite right:</strong><ul style="margin:6px 0 0 18px;">' + rows + '</ul></div>');
      calcBtn.disabled = true;
      calcBtn.textContent = 'Calculator (locked)';
      state.setupVerified = state.setupVerified || {};
      state.setupVerified[idx] = false;
      try { await API.submitTVMSetup(state.student.number, idx, Object.assign({}, setup, { passedCheck: false })); } catch (_) {}
    }
  }

  function openCalculator(idx) {
    if (!state.setupVerified || !state.setupVerified[idx]) {
      toast('Verify your TVM setup first.', 'warn');
      return;
    }
    const url = (state.config && state.config.tvmSolverUrl) || cfg.TVM_SOLVER_URL_FALLBACK;
    window.open(url, '_blank', 'noopener');
  }

  function renderTVMSetupHTML(q, idx) {
    const required = !state.config || state.config.tvmSetupRequired !== false;
    if (!required) return '';
    // All blank by default. If student previously saved a setup (resuming after refresh),
    // restore those values — they'll re-color via attachLiveValidation.
    const setup = (state.student.setups && state.student.setups[idx]) || {};
    const v = (key) => (setup[key] != null && setup[key] !== '') ? setup[key] : '';
    const sf = setup.solvingFor || '';
    function opt(label) { return '<option value="' + label + '"' + (sf === label ? ' selected' : '') + '>' + (label || '(choose)') + '</option>'; }
    return '<div class="tvm-setup" id="setup-' + idx + '">' +
      '<div class="tvm-setup-header"><h4>My TVM setup</h4><span class="toggle">collapse</span></div>' +
      '<p style="font-size:12px;color:var(--ink-soft);margin:0 0 8px;">Read the question and fill in every field. Fields turn green when right, red when wrong.</p>' +
      '<div class="tvm-fields">' +
        '<div class="field"><label>Solving for</label><select id="setup-solveFor-' + idx + '">' +
          opt('') + opt('FV') + opt('PV') + opt('PMT') + opt('I/Y') + opt('N') +
        '</select></div>' +
        '<div class="field"><label>N</label><input type="number" step="any" id="setup-N-' + idx + '" value="' + v('N') + '"></div>' +
        '<div class="field"><label>I/Y</label><input type="number" step="any" id="setup-iy-' + idx + '" value="' + v('iy') + '"></div>' +
        '<div class="field"><label>PV</label><input type="number" step="any" id="setup-pv-' + idx + '" value="' + v('pv') + '"></div>' +
        '<div class="field"><label>PMT</label><input type="number" step="any" id="setup-pmt-' + idx + '" value="' + v('pmt') + '"></div>' +
        '<div class="field"><label>FV</label><input type="number" step="any" id="setup-fv-' + idx + '" value="' + v('fv') + '"></div>' +
        '<div class="field"><label>P/Y</label><input type="number" step="any" id="setup-py-' + idx + '" value="' + v('py') + '"></div>' +
        '<div class="field"><label>C/Y</label><input type="number" step="any" id="setup-cy-' + idx + '" value="' + v('cy') + '"></div>' +
      '</div></div>';
  }

  // Live per-field validation: green when correct, red when wrong, no color when blank.
  function attachLiveValidation(card, q, idx) {
    const exp = expectedSetup(q);
    const fields = [
      { id: 'setup-solveFor-' + idx, expected: exp.solvingFor, type: 'select' },
      { id: 'setup-N-'    + idx, expected: exp.N   },
      { id: 'setup-iy-'   + idx, expected: exp.iy  },
      { id: 'setup-pv-'   + idx, expected: exp.pv  },
      { id: 'setup-pmt-'  + idx, expected: exp.pmt },
      { id: 'setup-fv-'   + idx, expected: exp.fv  },
      { id: 'setup-py-'   + idx, expected: exp.py  },
      { id: 'setup-cy-'   + idx, expected: exp.cy  }
    ];
    fields.forEach(f => {
      const el = card.querySelector('#' + f.id);
      if (!el) return;
      function validate() {
        el.classList.remove('correct', 'wrong');
        const val = el.value;
        if (val === '' || val === null) return;  // blank = neutral
        if (f.type === 'select') {
          el.classList.add(val === f.expected ? 'correct' : 'wrong');
          return;
        }
        const num = parseFloat(val);
        if (f.expected === null) {
          // "Solve for" side of the TVM equation — conventionally 0.
          el.classList.add(num === 0 ? 'correct' : 'wrong');
        } else if (approxEq(num, f.expected)) {
          el.classList.add('correct');
        } else {
          el.classList.add('wrong');
        }
      }
      el.addEventListener('input', validate);
      el.addEventListener('change', validate);
      validate();  // color any restored values immediately
    });
  }

  function readSetup(idx) {
    // MTH1W: setup is the structured work-fields object (per-key) + optional notes.
    return { work: readSetupFields(idx) };
  }

  async function submitAnswer(q, idx) {
    const inp = document.getElementById('ans-' + idx);
    const val = parseMoney(inp.value);
    if (!isFinite(val)) { toast('Enter a number first. ($, commas OK)', 'warn'); return; }
    const fbEl = document.getElementById('feedback-' + idx);
    const statusEl = document.getElementById('qstatus-' + idx);
    const submitBtn = document.getElementById('submit-' + idx);
    const submitBtnRect = submitBtn ? submitBtn.getBoundingClientRect() : null;
    state.lastFeedback = state.lastFeedback || {};
    if (fbEl) setHTML(fbEl, '');
    // Instant snappy feedback: button transitions immediately
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.origText = submitBtn.textContent;
      submitBtn.textContent = 'Checking…';
      submitBtn.classList.add('is-checking');
    }
    try { await API.submitTVMSetup(state.student.number, idx, readSetup(idx)); } catch (_) {}
    inp.disabled = true;
    state.interacting = Date.now();
    try {
      const r = await API.submitAnswer(state.student.number, idx, val);
      if (!r.ok) {
        state.lastFeedback[idx] = { text: r.error || 'Submit failed', warn: true };
        if (fbEl) setHTML(fbEl, '<div class="feedback warn">' + escapeHtml(r.error || 'Submit failed') + '</div>');
        inp.disabled = false;
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.origText || 'Submit answer'; submitBtn.classList.remove('is-checking'); }
        return;
      }
      if (r.correct) {
        state.student.answers[idx] = { value: val, correct: true, attempts: r.attemptNumber, completedAt: Date.now() };
        (r.gridCells || []).forEach(c => state.justFilled.add(c));
        delete state.lastFeedback[idx];
        if (submitBtn) {
          submitBtn.textContent = '✓ Correct!';
          submitBtn.classList.remove('is-checking');
          submitBtn.classList.add('is-correct');
        }
        // Confetti burst from the submit button
        fireConfettiAt(submitBtnRect);
        // Tile flips happen 200ms later as eye travels (re-render schedules animation)
        setTimeout(() => render(), 250);
      } else {
        const fbText = r.feedback || "Re-check your setup. Try the Small hint if you're stuck.";
        const fullText = fbText + ' (attempt ' + r.attemptNumber + ')';
        state.lastFeedback[idx] = { text: fullText, warn: !r.isClose };
        if (fbEl) setHTML(fbEl, '<div class="feedback ' + (r.isClose ? '' : 'warn') + '">' + escapeHtml(fullText) + '</div>');
        if (statusEl) { statusEl.className = 'q-status wrong'; statusEl.textContent = 'Recheck — try again'; }
        inp.disabled = false; inp.select && inp.select();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.origText || 'Submit answer';
          submitBtn.classList.remove('is-checking');
          // Brief shake to draw the eye to the feedback
          submitBtn.classList.add('is-shake');
          setTimeout(() => submitBtn.classList.remove('is-shake'), 500);
        }
      }
    } catch (err) {
      state.lastFeedback[idx] = { text: 'Could not reach server. Your answer was saved locally and will sync.', warn: true };
      if (fbEl) setHTML(fbEl, '<div class="feedback warn">Could not reach server. Your answer was saved locally and will sync.</div>');
      inp.disabled = false;
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.origText || 'Submit answer'; submitBtn.classList.remove('is-checking'); }
    }
  }

  function fireConfettiAt(rect) {
    if (typeof window.confetti !== 'function' || !rect) return;
    const origin = {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight
    };
    window.confetti({
      particleCount: 60, spread: 65, startVelocity: 35, ticks: 130,
      origin: origin, scalar: 0.9,
      colors: ['#1e7a3c', '#c89e60', '#5bc0eb', '#a8d65c', '#f4d03f', '#7d4f2a']
    });
  }

  function renderHintButtons(idx, scope) {
    // `scope` is the question card element (which may not be in the DOM yet).
    // Fall back to document for callers that pass nothing.
    const root = scope || document;
    const wrap = root.querySelector('#hints-' + idx);
    if (!wrap) return;
    const current = (state.student.hints && state.student.hints[idx]) || null;
    const level = current ? current.level : 0;
    const budget = (state.config && state.config.hintBudget) || state.sheets.hintBudget || 5;
    const spent = state.student.hintCreditsSpent || 0;
    const left = budget - spent;
    const labels = ['Small hint', 'Bigger hint', 'Show formula'];
    let html = '<span style="font-size:13px;color:var(--ink-soft);margin-right:6px;">Stuck?</span>';
    for (let L = 1; L <= 3; L++) {
      const cost = L === 1 ? 0 : (L === 2 ? 1 : 2);
      const disabled = L <= level || (cost > 0 && left < cost);
      html += '<button class="hint-btn" data-idx="' + idx + '" data-level="' + L + '" ' + (disabled ? 'disabled' : '') + '>' + labels[L-1] + '</button> ';
    }
    setHTML(wrap, html);
    wrap.querySelectorAll('.hint-btn').forEach(b => {
      b.onclick = (e) => useHint(parseInt(b.getAttribute('data-idx'), 10), parseInt(b.getAttribute('data-level'), 10));
    });
    const hintCardEl = root.querySelector('#hint-card-' + idx);
    if (current && current.html && hintCardEl) {
      setHTML(hintCardEl, '<div class="hint-card"><h5>Hint level ' + current.level + '</h5>' + current.html + '</div>');
      renderMathInElement(hintCardEl);
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

  // Class-wide mosaic. Renders all 16 sections (40x40 cells) using the live
  // classMosaic API snapshot (which slots have been solved by ANY student in each
  // section, plus teacher-released sections).
  function renderMosaic(sheet, colors, slots) {
    const card = document.createElement('div');
    card.className = 'card mosaic-card';
    const mySection = state.student.sheetId;
    const mode = state.mosaicMode || (localStorage.getItem('mosaic.mth1w.mosaicMode.v1') || 'mine');
    state.mosaicMode = mode;
    setHTML(card,
      '<div class="mosaic-header">' +
        '<div class="mosaic-toggle" role="tablist">' +
          '<button class="mosaic-tab ' + (mode === 'mine'  ? 'active' : '') + '" data-mode="mine">My tile</button>' +
          '<button class="mosaic-tab ' + (mode === 'class' ? 'active' : '') + '" data-mode="class">Class</button>' +
        '</div>' +
        '<button class="mosaic-fullscreen" id="mosaic-fs" title="Fullscreen">⛶</button>' +
      '</div>' +
      '<div class="mosaic-stage" id="mosaic-stage"></div>' +
      '<div class="mosaic-legend-wrap" id="mosaic-legend"></div>'
    );
    drawMosaicStage(card.querySelector('#mosaic-stage'), mode);
    // Legend
    const legend = card.querySelector('#mosaic-legend');
    const legendInner = document.createElement('div'); legendInner.className = 'legend';
    Object.keys(colors).forEach(key => {
      const c = colors[key];
      const item = document.createElement('div'); item.className = 'item';
      const sw = document.createElement('span'); sw.className = 'swatch'; sw.style.background = c.hex;
      const lbl = document.createElement('span'); lbl.textContent = c.label;
      item.appendChild(sw); item.appendChild(lbl); legendInner.appendChild(item);
    });
    legend.appendChild(legendInner);
    // Tab handlers
    card.querySelectorAll('.mosaic-tab').forEach(btn => {
      btn.onclick = () => {
        const m = btn.getAttribute('data-mode');
        state.mosaicMode = m;
        localStorage.setItem('mosaic.mth1w.mosaicMode.v1', m);
        card.querySelectorAll('.mosaic-tab').forEach(b => b.classList.toggle('active', b === btn));
        drawMosaicStage(card.querySelector('#mosaic-stage'), m);
      };
    });
    card.querySelector('#mosaic-fs').onclick = () => openFullscreenMosaic();
    return card;
  }

  function drawMosaicStage(stage, mode) {
    setHTML(stage, '');
    const colors = state.sheets.colors;
    const slots = state.sheets.questionColorSlots;
    if (mode === 'mine') {
      stage.className = 'mosaic-stage stage-mine';
      drawMyTile(stage, colors, slots);
    } else {
      stage.className = 'mosaic-stage stage-class';
      const wrap = document.createElement('div');
      wrap.className = 'class-mosaic-wrap';
      wrap.id = 'class-mosaic';
      stage.appendChild(wrap);
      drawClassMosaic(wrap, null, colors, slots);
    }
  }

  // Single 10x10 grid of student's own section. Animates flipping new tiles in.
  function drawMyTile(stage, colors, slots) {
    const sid = state.student.sheetId;
    const sheet = state.sheets.sheets[sid];
    const cmSnap = state.classMosaic || { solved: {}, released: {} };
    const sectionSolved = (cmSnap.solved && cmSnap.solved[sid]) || new Array(18).fill(false);
    const released = !!(cmSnap.released && cmSnap.released[sid]);
    let liveSolved = sectionSolved.slice();
    state.student.answers.forEach((a, idx) => { if (a && a.correct) liveSolved[idx] = true; });

    const wrap = document.createElement('div');
    wrap.className = 'my-tile-wrap';
    const header = document.createElement('div');
    header.className = 'my-tile-header';
    const solvedCount = liveSolved.filter(Boolean).length;
    setHTML(header, '<span class="my-tile-label">Your section: <strong>' + escapeHtml(sid) + '</strong></span>' +
                    '<span class="my-tile-progress">' + solvedCount + ' / 18 questions</span>');
    wrap.appendChild(header);
    const grid = document.createElement('div'); grid.className = 'mosaic-grid';
    sheet.grid.forEach((slot, cellIdx) => {
      const tile = document.createElement('div');
      tile.className = 'mosaic-tile';
      const inner = document.createElement('div'); inner.className = 'tile-inner';
      const front = document.createElement('div'); front.className = 'tile-front';
      const back  = document.createElement('div'); back.className  = 'tile-back';
      if (slot !== null) back.style.background = colors[slots[slot]].hex;
      inner.appendChild(front); inner.appendChild(back);
      tile.appendChild(inner);
      tile.setAttribute('data-cell', cellIdx);
      tile.setAttribute('data-slot', String(slot));
      if (slot !== null && (released || liveSolved[slot])) {
        // Stagger the reveal: cells just-filled animate, already-filled jump
        if (state.justFilled.has(cellIdx)) {
          // Defer the class addition to next frame so the flip animates
          requestAnimationFrame(() => requestAnimationFrame(() => tile.classList.add('is-revealed')));
        } else {
          tile.classList.add('is-revealed', 'no-animate');
        }
      }
      grid.appendChild(tile);
    });
    state.justFilled.clear();
    wrap.appendChild(grid);
    stage.appendChild(wrap);
  }

  function openFullscreenMosaic() {
    const ov = document.createElement('div');
    ov.className = 'mosaic-fullscreen-overlay';
    setHTML(ov,
      '<button class="fullscreen-close" id="fs-close" aria-label="Close">×</button>' +
      '<div class="fullscreen-tabs">' +
        '<button class="fs-tab ' + (state.mosaicMode === 'mine' ? 'active' : '') + '" data-mode="mine">My tile</button>' +
        '<button class="fs-tab ' + (state.mosaicMode === 'class' ? 'active' : '') + '" data-mode="class">Class</button>' +
      '</div>' +
      '<div class="fullscreen-stage" id="fs-stage"></div>'
    );
    document.body.appendChild(ov);
    const stage = ov.querySelector('#fs-stage');
    drawMosaicStage(stage, state.mosaicMode);
    ov.querySelectorAll('.fs-tab').forEach(b => {
      b.onclick = () => {
        const m = b.getAttribute('data-mode');
        state.mosaicMode = m;
        localStorage.setItem('mosaic.mth1w.mosaicMode.v1', m);
        ov.querySelectorAll('.fs-tab').forEach(x => x.classList.toggle('active', x === b));
        drawMosaicStage(stage, m);
      };
    });
    function close() { ov.remove(); }
    ov.querySelector('#fs-close').onclick = close;
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
    });
  }

  // Renders the 4x4 of 10x10 section grids into the given wrap element.
  function drawClassMosaic(wrap, _sheet, colors, slots) {
    setHTML(wrap, '');
    const layout = state.sheets.layout;            // 4x4 of section IDs
    const allSheets = state.sheets.sheets;
    const cmSnap = state.classMosaic || { solved: {}, released: {} };
    const mySection = state.student && state.student.sheetId;

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const sid = layout[r][c];
        const sectionEl = document.createElement('div');
        sectionEl.className = 'cm-section';
        if (sid === mySection) sectionEl.classList.add('mine');
        // mini 10x10 grid
        const mini = document.createElement('div');
        mini.className = 'cm-mini';
        const sectionSolved = cmSnap.solved[sid] || new Array(18).fill(false);
        const released = !!(cmSnap.released && cmSnap.released[sid]);
        const grid = allSheets[sid].grid;
        // For my own section, also use my live answers (so I see my piece fill immediately)
        let liveSolved = sectionSolved.slice();
        if (sid === mySection && state.student && state.student.answers) {
          state.student.answers.forEach((a, idx) => { if (a && a.correct) liveSolved[idx] = true; });
        }
        grid.forEach((slot) => {
          const cell = document.createElement('div'); cell.className = 'cm-cell';
          if (slot !== null && (released || liveSolved[slot])) {
            cell.style.background = colors[slots[slot]].hex;
          }
          mini.appendChild(cell);
        });
        // Label
        const label = document.createElement('div');
        label.className = 'cm-label';
        label.textContent = sid;
        sectionEl.appendChild(label);
        sectionEl.appendChild(mini);
        wrap.appendChild(sectionEl);
      }
    }
    updateClassTilesCounter(cmSnap);
  }

  function updateClassTilesCounter(cmSnap) {
    const counter = document.getElementById('class-tiles-counter');
    if (!counter) return;
    let done = 0;
    Object.keys(state.sheets.sheets).forEach(sid => {
      const released = !!(cmSnap.released && cmSnap.released[sid]);
      const solved = (cmSnap.solved && cmSnap.solved[sid]) || [];
      if (released || (solved.length === 18 && solved.every(Boolean))) done++;
    });
    setHTML(counter, '<strong>Class tiles done:</strong> ' + done + ' / 16');
  }

  async function refreshClassMosaic() {
    try {
      const r = await API.classMosaic();
      if (r.ok) {
        state.classMosaic = r;
        // Update whichever mosaic view is currently visible
        const stage = document.getElementById('mosaic-stage');
        if (stage) drawMosaicStage(stage, state.mosaicMode || 'mine');
        updateClassTilesCounter(r);
      }
    } catch (_) {}
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
    // Fetch the live solved-bitmap snapshot (same source the student view uses)
    API.classMosaic().then(cm => {
      if (!cm || !cm.ok) return;
      setHTML(el, '');
      const studentCount = {};
      snap.students.forEach(s => { studentCount[s.section] = (studentCount[s.section] || 0) + 1; });
      state.sheets.layout.flat().forEach(sid => {
        const sec = document.createElement('div'); sec.className = 'sec';
        const solvedBitmap = cm.solved[sid] || new Array(18).fill(false);
        const numSolved = solvedBitmap.filter(Boolean).length;
        const released = !!(cm.released && cm.released[sid]);
        const pct = Math.round((numSolved / 12) * 100);
        const n = studentCount[sid] || 0;
        setHTML(sec, '<h4>' + escapeHtml(sid) + (released ? ' <span style="font-size:9px;color:var(--accent);">released</span>' : '') +
                     '</h4><div class="count">' + n + '  ' + pct + '%</div>');
        const mini = document.createElement('div'); mini.className = 'mini-grid';
        const sheet = sheets[sid];
        sheet.grid.forEach((slot) => {
          const cell = document.createElement('div'); cell.className = 'cell';
          if (slot !== null && (released || solvedBitmap[slot])) {
            cell.style.background = colors[slots[slot]].hex;
          }
          mini.appendChild(cell);
        });
        sec.appendChild(mini);
        // Release / Unrelease button
        const btn = document.createElement('button');
        btn.className = 'release-btn';
        btn.style.cssText = 'margin-top:6px;font-size:11px;padding:2px 8px;width:100%;';
        btn.textContent = released ? 'Unrelease' : 'Release section';
        btn.onclick = async () => {
          const action = released ? 'unreleaseSection' : 'releaseSection';
          const r = await API[action](state.teacherPin, sid);
          if (r && r.ok) { toast((released ? 'Unreleased ' : 'Released ') + sid); drawDashboardMosaic(state.snapshot); }
          else toast('Failed: ' + (r && r.error || 'unknown'), 'warn');
        };
        sec.appendChild(btn);
        el.appendChild(sec);
      });
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
    document.getElementById('crumb').textContent = 'Financial Literacy + Data';
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
      if (state.pollers.classMosaic) clearInterval(state.pollers.classMosaic);
      refreshClassMosaic();
      state.pollers.classMosaic = setInterval(refreshClassMosaic, cfg.POLL_TEACHER_MS);
      return;
    }
    if (route.path === 'teacher') return renderTeacher();
    if (route.path === 'teacher/setup') return renderTeacherSetup();
    if (route.path === 'teacher/audit') return renderTeacherAudit();
    renderHome();
  }

  async function refreshStudent() {
    if (!state.student) return;
    // Don't disturb the UI if the student is actively typing or just submitted.
    const active = document.activeElement && document.activeElement.tagName;
    if (active === 'INPUT' || active === 'SELECT' || active === 'TEXTAREA') return;
    if (state.interacting && (Date.now() - state.interacting) < 8000) return;
    try {
      const r = await API.signin(state.student.name, state.student.number);
      if (!r.ok) return;
      const oldSolved = (state.student.answers || []).filter(a => a && a.correct).length;
      const newSolved = (r.student.answers || []).filter(a => a && a.correct).length;
      state.student = r.student; state.config = r.config;
      // Only re-render if something meaningful changed (e.g. teacher reset).
      if (oldSolved !== newSolved) renderSection();
    } catch (_) {}
  }

  (async function init() {
    await loadSheetsData();
    const saved = localStorage.getItem('mosaic.mth1w.student.v1');
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
