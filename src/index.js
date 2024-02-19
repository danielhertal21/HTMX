import "dotenv/config";
import express from "express";
import { Liquid } from "liquidjs";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import App from "./controllers/App.js";
import sequelize from "./db/sequelize.js";
import Login from "./controllers/Login.js";
import Auth from "./controllers/Auth.js";

import livereload from "livereload";
import connectLiveReload from "connect-livereload";

import { execSync } from "child_process";

//execSync("npm run processcss:dev");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

(async () => {
  await sequelize.authenticate();
  console.log("SEQUELIZE ON!");

  const app = express();

  app.use(connectLiveReload());

  const engine = new Liquid();

  app.use(express.static("public"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.engine("liquid", engine.express());
  app.set("views", "./src/views");
  app.set("view engine", "liquid");

  app.get("/", Auth, App);
  app.route("/login").get(Login.page).post(Login.login);

  app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
  });
})();
