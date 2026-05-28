// frontend/config.js
// Holds runtime configuration. Edit BACKEND_URL after deploying the GAS web app.
window.APP_CONFIG = {
  BACKEND_URL: 'https://script.google.com/macros/s/AKfycbyG8tOa-QXj8d1xsVv_5Z-X_OdivzVfwisrNRPnp_PLz-FUq3FYR--RXIGWhOHra5wqgQ/exec',
  POLL_STUDENT_MS: 10000,   // student polls its own state every 10s
  POLL_TEACHER_MS: 5000,    // teacher dashboard polls every 5s
  PING_MS: 30000,           // connection health ping every 30s
  TVM_SOLVER_URL_FALLBACK: 'https://script.google.com/a/macros/ddsb.ca/s/AKfycbwwyuzTAxStW8ZU8fZbsk2OQa3kc4XN92JjNEzzWqsa6hB0TWmcNXUn2jBhEAf84vll/exec'
};
