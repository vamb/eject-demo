const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.0.49.13:4321/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    })
  );
};
