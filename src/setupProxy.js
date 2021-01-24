const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "http://localhost:7002/",
      changeOrigin: true, // 设置跨域请求
      PathRewrite: {
        "^/api/v1": "", // 将/api/v1 变为 ''
      },
      ws: true,
    })
  );
};
