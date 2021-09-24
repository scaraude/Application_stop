const mongoose = require("mongoose");
const dbConfig = require("./database.config");
const Role = require("../role/role.model");
const { logger } = require("../../utils/logger");

const connectDB = () => {
  mongoose
    .connect(dbConfig.getMongoURI(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info("Successfully connect to MongoDB.");
      initiate();
    })
    .catch((err) => {
      logger.error(`Connection error > err ${err}`);
      process.exit();
    });
};

function initiate() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          logger.error(`database.service > ${JSON.stringify(err)}`);
        }

        logger.info("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          logger.error(`error while saving Role > ${err}`);
        }

        logger.info("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          logger.error(`error while saving Role > ${err}`);
        }

        logger.info("added 'admin' to roles collection");
      });
    }
  });
}

const databaseService = {
  connectDB,
};

module.exports = databaseService;
