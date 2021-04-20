/* eslint-disable no-undef */
const db = require("../../models");
const dbConfig = require("../../config/db.config");
const initialitor = require("./initialisator.service");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initialitor.initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
