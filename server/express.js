import express from "express";
import path from "path";
import Mail from './helpers/Mail'
const webpack = require("webpack");
const bodyParser = require("body-parser");
const config = require("../webpack.js");
const server = express();
const compiler = webpack(config);


if (process.env.NODE_ENV !== "production") {
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
}

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

server.use(bodyParser.urlencoded({ extended: false }));

// parse serverlication/json
server.use(bodyParser.json());

server.get("/cv", function(req, res) {
  var filePath = path.join(__dirname, "../dist/images/cv-2018-pn-921113.pdf");

  res.download(filePath);
});

server.post("/contact", function(req, res) {
  const {name, email, subject, message} = req.body;
  const mail = new Mail("Patrik");
  const output = `
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;

  mail.send(subject, output, ["patriknilsson1992@gmail.com"])
  .then(data => res.send('ok'))
  .catch(err => res.status(500).send(err))
});
