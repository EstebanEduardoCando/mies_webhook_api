const http = require("http");
const express = require("express");
const webServerConfig = require("../config/web-server.js");
const database = require("./database.js");
const morgan = require("morgan");
const router = require("./router.js");
const ngrok = require("ngrok");

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    (async function () {
      const url = await ngrok.connect(3000);
      console.log(url);
    })();

    const app = express();
    app.use(express.json());
    httpServer = http.createServer(app);
    app.use(morgan("combined"));
    app.use("/api", router);

    app.get("/", (req, res) => {
      res.end("Hello World!");
    });

    httpServer
      .listen(webServerConfig.port)
      .on("listening", () => {
        console.log(
          `Web server listening on localhost:${webServerConfig.port}`
        );

        resolve();
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;
module.exports.initialize = initialize;
