const { createProxyMiddleware } = require('http-proxy-middleware');

// KEC Backend Linways Endpoints (api.kongu.edu / localhost:8000)
const BACKEND_TARGET =
  process.env.REACT_APP_KEC_API_URL ||
  process.env.REACT_APP_API_BASE_URL ||
  'https://api.kongu.edu';

module.exports = function (app) {
  // Proxy all /kec/linways/* requests to KEC Backend
  // Covers:
  // 1. GET /kec/linways/departments/{dept_slug}
  // 2. GET /kec/linways/staff/{staff_id}/report
  // 3. GET /kec/linways/staffs
  // 4. GET /kec/linways/exat2/reports
  // 5. GET /kec/linways/exat2/forms
  // 6. GET /kec/linways/exat2/forms/reports/{form_id}/{target_id}
  app.use(
    '/kec/linways',
    createProxyMiddleware({
      target: BACKEND_TARGET,
      changeOrigin: true,
      secure: false,
      logLevel: 'warn'
    })
  );
};
