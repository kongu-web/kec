const { createProxyMiddleware } = require('http-proxy-middleware');

const LINWAYS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhSWQiOiI3NzJiMzBkYTAxNTgyYmI3MGJjOSIsImNJZCI6IjYyMDgiLCJvSWQiOiI1IiwiaWF0IjoxNzUxNjI5MjE2fQ.N-VE2fD5Y4ItlPjqkllUt_S6emFWXp0ATkkKCRtJkx4';
const LINWAYS_REPORT_ID = 'nbhB3D8Y793eTKdgf';

module.exports = function (app) {
  // 1. Staff Report Proxy: /kec/linways/staff/:staffId/report -> https://kec.linways.com/api/v1/exat2/reports/nbhB3D8Y793eTKdgf/:staffId
  app.use(
    '/kec/linways/staff',
    createProxyMiddleware({
      target: 'https://kec.linways.com',
      changeOrigin: true,
      secure: false,
      headers: {
        Authorization: LINWAYS_TOKEN,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      pathRewrite: (path) => {
        const match = path.match(/\/(\d+)\/report/);
        if (match) {
          return `/api/v1/exat2/reports/${LINWAYS_REPORT_ID}/${match[1]}`;
        }
        return path;
      }
    })
  );

  // 2. Staffs List Proxy: /kec/linways/staffs -> https://kec.linways.com/api/v1/staffs/
  app.use(
    '/kec/linways/staffs',
    createProxyMiddleware({
      target: 'https://kec.linways.com',
      changeOrigin: true,
      secure: false,
      headers: {
        Authorization: LINWAYS_TOKEN,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      pathRewrite: {
        '^/kec/linways/staffs': '/api/v1/staffs/'
      }
    })
  );
};
