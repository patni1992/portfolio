import express from "express";

const webpack = require("webpack");
const config = require("../webpack.js");
const server = express();
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const webpackHotMiddlware = require("webpack-hot-middleware")(
  compiler,
  config.devServer
);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddlware);
console.log("Middleware enabled");

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
