/* eslint-disable no-undef */
import express from "express"
import morgan from "morgan";
import errorHandler from "errorhandler";
import path from "path";
import cors from "cors";
import { logger } from "../../utils/logger";

export const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(morgan("dev"));

require("./database/database.service").connectDB();

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

require("./auth/auth.routes")(app);
require("./user/user.routes")(app);
require("./spot/spot.route")(app);
require("./comment/comment.route")(app);

app.get("/*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
} else {
  app.use((request, response, next) => {
    logger.error("404 => Path not found");
    response.status(500).send("Server Error");
  });
}

module.exports = app;
