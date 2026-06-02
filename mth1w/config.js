// frontend/config.js (MTH1W)
// Edit BACKEND_URL after deploying the GAS web app for this activity.
window.APP_CONFIG = {
  ACTIVITY_KEY: 'mth1w',            // localStorage namespace
  BRAND_TITLE: 'MTH1W Mosaic',
  BRAND_SUBTITLE: 'Financial Literacy + Data Management',
  BACKEND_URL: 'https://script.google.com/macros/s/AKfycby-liNtksY7OkSFte-qwuQNmhwtmHDdfqCVlNzm7vQUcijtrhOjEhLBFVtiGlcUv3Tp3g/exec',
  // Polling tuned for ~30-student cohorts. Going faster than this overwhelmed
  // the GAS backend during the May rollout (audit appendRow serialization +
  // LockService queue depth). Don't lower without re-load-testing.
  POLL_STUDENT_MS: 20000,   // refreshStudent — only re-renders if solvedCount changed
  POLL_TEACHER_MS: 15000,   // teacher snapshot + student-side classMosaic poll
  // NOTE: classMosaic is now server-cached for 8s, so polling faster than
  // ~10s just wastes round trips returning the same cached blob.
  PING_MS: 30000,
  TVM_SOLVER_URL_FALLBACK: 'https://script.google.com/a/macros/ddsb.ca/s/AKfycbwwyuzTAxStW8ZU8fZbsk2OQa3kc4XN92JjNEzzWqsa6hB0TWmcNXUn2jBhEAf84vll/exec'
};
