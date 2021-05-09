const mongoose = require("mongoose");
const dbConfig = require("./database.config");
const Role = require("../role/role.model");

const connectDB = () => {
  mongoose
    .connect(dbConfig.getMongoURI(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connect to MongoDB.");
      initiate();
    })
    .catch((err) => {
      console.error("Connection error", err);
      // eslint-disable-next-line no-undef
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
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

const databaseService = {
  connectDB,
};

module.exports = databaseService;
