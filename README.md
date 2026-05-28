# Colouring by Annuities — Lazy Giraffe

MAP4C classroom assessment tool. Students sign in with their student number, get assigned one of 16 worksheets, solve 12 annuity questions, and watch tiles colour in. When every section is complete the class reveals a 40×40 giraffe mosaic.

Built per the Rebuild Prompt Deck + Pedagogy/Reliability Addendum.

## Stack

- **Frontend**: vanilla HTML / CSS / JS, hash-based SPA, deployed as static files (GitHub Pages)
- **Backend**: Google Apps Script web app (deploy via `clasp`)
- **Storage**: GAS Properties Service (student records) + bound Google Sheet (audit log)
- **Validation**: Node script `scripts/validate.js` re-derives every answer from FV/PV/INT formulas

## Repo layout

```
annuities-rebuild/
├── backend/                       # Apps Script source
│   ├── appsscript.json            # manifest
│   ├── Code.gs                    # HTTP router + endpoint handlers
│   ├── Storage.gs                 # Properties Service + audit-log Sheet
│   ├── Assignment.gs              # least-claimed section assignment
│   ├── Hints.gs                   # 3-level hint generator (concept / variables / TVM inputs)
│   ├── Alerts.gs                  # "who needs help" alerts + dashboard aggregates
│   ├── Sheets.gs                  # auto-generated mirror of data/sheets.json
│   └── Test.gs                    # runAllTests() + backupSnapshot()
├── frontend/
│   ├── index.html                 # shell
│   ├── config.js                  # runtime BACKEND_URL + poll intervals
│   ├── api.js                     # GAS fetch wrapper with retry + offline queue
│   ├── app.js                     # routing, views, components
│   └── styles/main.css            # all design tokens + responsive + print
├── data/
│   └── sheets.json                # single source of truth (192 questions × 1600 cells)
├── scripts/
│   └── validate.js                # node validator (recomputes answers vs stored)
├── generate_sheets_gs.py          # regenerate backend/Sheets.gs from data/sheets.json
└── package.json
```

## First-time deploy

### 1. Backend (Apps Script)

```bash
cd backend/
clasp create --type webapp --title "Annuities Mosaic Backend"
clasp push
clasp deploy --description "v1"
```

`clasp` prints a deployment URL like `https://script.google.com/macros/s/AKfycb.../exec`. Copy it.

Then in the GAS editor:

1. **Project Settings → Script Properties → Add property**
   - `TEACHER_PIN` = the PIN you'll use to access `/teacher?pin=...`
2. **Editor → run `runAllTests`** once to seed the audit-log Spreadsheet and confirm everything wires up.
3. (Optional) **Editor → run `installBackupTrigger`** to enable 5-minute snapshots per Phase 10 of the addendum.

### 2. Frontend

Edit `frontend/config.js`:

```js
window.APP_CONFIG = {
  BACKEND_URL: 'https://script.google.com/macros/s/AKfycb.../exec',  // paste from clasp deploy
  POLL_STUDENT_MS: 10000,
  POLL_TEACHER_MS: 5000,
  PING_MS: 30000,
  TVM_SOLVER_URL_FALLBACK: 'https://...'   // your existing MAP4C TVM solver URL
};
```

For GitHub Pages: commit and push to the `gh-pages` (or `main`) branch of the repo serving `ryanwestcott-ops.github.io/Colouring-by-Annuities`. Pages serves the `frontend/` and `data/` directories as-is.

For local dev: `npm run serve` (uses `python -m http.server`).

### 3. Validate before going live

```bash
npm run validate
```

This re-computes every answer from the formulas and checks every grid cell maps to a valid slot. **Run after editing `data/sheets.json`**, and re-run `python generate_sheets_gs.py` to regenerate `backend/Sheets.gs`.

## Day-of operation

1. (Night before) Open `#teacher/setup?pin=YOUR_PIN`, paste your roster, click "Round-robin assign", then "Pre-register all". Every student now has a section waiting.
2. (Start of class) Set Activity status → **Open** in the teacher setup tab.
3. Students hit the URL, sign in with their number + first name, and start working.
4. You sit on `#teacher?pin=YOUR_PIN` — the "Who needs help" panel surfaces stuck/idle/done students live (5-sec poll).
5. End of class: **Export audit CSV** from the dashboard for assessment evidence.
6. If WiFi fails: students see a yellow banner, their work caches to `localStorage`, and the queue drains automatically on reconnect.

## URLs

| What                | URL hash                                |
| ------------------- | --------------------------------------- |
| Sign in (student)   | `#home`                                 |
| Student work area   | `#section`                              |
| Teacher dashboard   | `#teacher?pin=YOUR_PIN`                 |
| Class setup         | `#teacher/setup?pin=YOUR_PIN`           |
| Audit log           | `#teacher/audit?pin=YOUR_PIN`           |

## API surface

All endpoints are `POST` to `BACKEND_URL?action=<name>` with a JSON body. Returns `{ ok: boolean, ... }`.

| action            | body                                            | notes |
| ----------------- | ----------------------------------------------- | ----- |
| `signin`          | `{name, number}`                                | Returns student record + assigns section if new. Doubles as state-refresh poll. |
| `submitAnswer`    | `{number, qIndex, value}`                       | Returns `{correct, gridCells, feedback, attemptNumber, isClose}`. Server detects common-error patterns and returns targeted feedback. |
| `submitTVMSetup`  | `{number, qIndex, setup}`                       | Logs the student's TVM-solver inputs (assessment evidence, not graded). |
| `useHint`         | `{number, qIndex, level}`                       | Level 1 free, L2=1 credit, L3=2 credits. Returns `{out_of_credits}` if budget exhausted. |
| `teacherSnapshot` | `{teacherPin}`                                  | Returns `{students, aggregates, alerts}`. Names omitted (privacy); numbers only. |
| `teacherAction`   | `{teacherPin, action, number, payload}`         | `resetHints | resetStudent | deleteStudent | reassign | resetAllHints | deleteAll`. |
| `exportAuditLog`  | `{teacherPin, since}`                           | Returns every logged event since `since` ms. |
| `getConfig`       | `{}`                                            | Public config (activity status, hint budget, etc.). |
| `setConfig`       | `{teacherPin, config}`                          | Teacher-only. |
| `rosterPreload`   | `{teacherPin, numbers, assignments?}`           | Pre-register students before class. |
| `connectionPing`  | `GET`                                           | Health check. Returns `{ok, serverTime, version}`. |

## Pedagogy + reliability decisions (from the addendum)

- **Wrong answers get hints, not penalties.** Targeted feedback (`off_by_freq`, `pmt_times_n`, `pv_not_fv`, `close_check_rounding`, `fv_not_interest`, `pv_not_interest`) helps students re-orient without revealing the answer.
- **TVM setup is part of the work.** Students record their TVM-solver inputs before each submit. Logged but not graded — visible to the teacher as evidence that the student thought before guessing.
- **Hint credits.** Level 1 = free, L2 = 1 credit, L3 = 2 credits. Default budget 5. Teacher-configurable per class.
- **Live teacher alerts.** "Stuck" (≥3 wrong attempts on same Q), "Idle" (no activity 10 min), "Done" (just completed).
- **Offline resilience.** Submissions cache to `localStorage` and drain on reconnect. Connection banner: green / yellow / red.
- **Backup snapshots.** `installBackupTrigger()` creates a dated Sheet copy every 5 minutes.

## Curriculum alignment

Each question is tagged with an Ontario MAP4C strand C expectation:

| Slot         | Type        | Tag       |
| ------------ | ----------- | --------- |
| Q1–3         | FV          | C1.2      |
| Q4–6         | PV          | C1.3      |
| Q7–9         | Interest earned | C1.4   |
| Q10–12       | Interest paid   | C2.2   |

The CSV export from the audit log includes the tag column so evidence can be filtered against specific expectations in Sheets/Excel.

## Regenerating data

If you edit `data/sheets.json` (text rewrites, parameter tweaks):

```bash
npm run validate                  # confirm answers + grid still consistent
python generate_sheets_gs.py      # regen backend/Sheets.gs
cd backend && clasp push          # deploy backend with new data
```

## Smoke test checklist

After deploying, verify:

- [ ] `#home` loads, sign-in with a fake number assigns a section
- [ ] First-time mission screen appears, dismisses, doesn't return until "?" is clicked
- [ ] Submitting a wrong answer shows targeted feedback (try entering `PMT × N` for an FV question)
- [ ] Submitting the correct answer fills tiles with the right colour
- [ ] Hint Level 1 is free; Level 2 deducts 1 credit; budget runs out at 5
- [ ] `#teacher?pin=...` shows the roster and alerts; reset/delete/reassign work
- [ ] `#teacher/setup?pin=...` saves config; pre-register populates the roster
- [ ] Disconnect WiFi → yellow banner appears → submit answer → reconnect → answer syncs
- [ ] `Export audit CSV` produces a CSV with every event

## License

MIT
