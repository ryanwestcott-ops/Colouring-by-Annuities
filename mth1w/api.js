// frontend/api.js — GAS fetch wrapper with retry, offline queue, connection ping.
(function () {
  const cfg = window.APP_CONFIG;
  const ACTIVITY = (cfg && cfg.ACTIVITY_KEY) || 'default';
  const QUEUE_KEY = 'mosaic.' + ACTIVITY + '.pendingQueue.v1';

  function loadQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); } catch (_) { return []; }
  }
  function saveQueue(q) { localStorage.setItem(QUEUE_KEY, JSON.stringify(q)); }
  function enqueue(item) { const q = loadQueue(); q.push(item); saveQueue(q); }
  function queueSize() { return loadQueue().length; }

  let _online = true;
  const onlineListeners = [];
  function setOnline(v) {
    if (_online === v) return;
    _online = v;
    onlineListeners.forEach(fn => { try { fn(v); } catch (_) {} });
  }

  async function rawCall(action, body, attempt) {
    attempt = attempt || 0;
    try {
      const res = await fetch(cfg.BACKEND_URL + '?action=' + encodeURIComponent(action), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // avoid CORS preflight
        body: JSON.stringify(Object.assign({ action: action, timestamp: Date.now() }, body || {})),
        redirect: 'follow'
      });
      if (!res.ok) throw new Error('http_' + res.status);
      const data = await res.json();
      setOnline(true);
      return data;
    } catch (err) {
      if (attempt >= 2) throw err;
      const wait = 300 * Math.pow(2, attempt);
      await new Promise(r => setTimeout(r, wait));
      return rawCall(action, body, attempt + 1);
    }
  }

  async function call(action, body) {
    try {
      return await rawCall(action, body);
    } catch (err) {
      setOnline(false);
      // Only certain mutating actions are queueable:
      if (['submitAnswer', 'submitTVMSetup', 'useHint'].indexOf(action) >= 0) {
        enqueue({ action: action, body: body, ts: Date.now() });
      }
      throw err;
    }
  }

  async function drainQueue() {
    const q = loadQueue();
    if (!q.length) return { drained: 0 };
    const remaining = [];
    let drained = 0;
    for (const item of q) {
      try {
        await rawCall(item.action, item.body);
        drained++;
      } catch (err) {
        remaining.push(item); // keep for next attempt
      }
    }
    saveQueue(remaining);
    return { drained: drained, remaining: remaining.length };
  }

  async function ping() {
    try {
      const res = await fetch(cfg.BACKEND_URL, { method: 'GET', redirect: 'follow' });
      if (!res.ok) throw new Error('http_' + res.status);
      const data = await res.json();
      setOnline(true);
      if (queueSize() > 0) drainQueue();
      return data;
    } catch (err) {
      setOnline(false);
      throw err;
    }
  }

  window.API = {
    signin:        (name, number) => call('signin', { name, number }),
    submitAnswer:  (number, qIndex, value) => call('submitAnswer', { number, qIndex, value }),
    submitTVMSetup:(number, qIndex, setup) => call('submitTVMSetup', { number, qIndex, setup }),
    useHint:       (number, qIndex, level) => call('useHint', { number, qIndex, level }),
    teacherSnapshot:(teacherPin) => call('teacherSnapshot', { teacherPin }),
    teacherAction: (teacherPin, action, number, payload) =>
                     call('teacherAction', { teacherPin, action, number, payload }),
    exportAuditLog:(teacherPin, since) => call('exportAuditLog', { teacherPin, since }),
    getConfig:     () => call('getConfig', {}),
    setConfig:     (teacherPin, config) => call('setConfig', { teacherPin, config }),
    rosterPreload: (teacherPin, numbers, assignments) =>
                     call('rosterPreload', { teacherPin, numbers, assignments }),
    classMosaic:     () => call('classMosaic', {}),
    releaseSection:  (teacherPin, section) => call('releaseSection',   { teacherPin, section }),
    unreleaseSection:(teacherPin, section) => call('unreleaseSection', { teacherPin, section }),
    ping:          ping,
    drainQueue:    drainQueue,
    queueSize:     queueSize,
    onConnectivity:(fn) => onlineListeners.push(fn),
    isOnline:      () => _online
  };
})();
