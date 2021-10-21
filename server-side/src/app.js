/* eslint-disable no-undef */
const express = require("express");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
const path = require("path");
const cors = require("cors");
const { logger } = require("../../utils/logger");

const app = express();

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
  app.use((err, req, res) => {
    logger.error(err);
    res.status(500).send("Server Error");
  });
}

module.exports = app;
