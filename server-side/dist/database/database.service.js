"use strict";
var mongoose = require("mongoose");
var dbConfig = require("./database.config");
var Role = require("../role/role.model");
var logger = require("../../utils/logger").logger;
var connectDB = function () {
    mongoose
        .connect(dbConfig.getMongoURI(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(function () {
        logger.info("Successfully connect to MongoDB.");
        initiate();
    })
        .catch(function (err) {
        logger.error("Connection error > err " + err);
        process.exit();
    });
};
function initiate() {
    Role.estimatedDocumentCount(function (err, count) {
        if (!err && count === 0) {
            new Role({
                name: "user",
            }).save(function (err) {
                if (err) {
                    logger.error("database.service > " + JSON.stringify(err));
                }
                logger.info("added 'user' to roles collection");
            });
            new Role({
                name: "moderator",
            }).save(function (err) {
                if (err) {
                    logger.error("error while saving Role > " + err);
                }
                logger.info("added 'moderator' to roles collection");
            });
            new Role({
                name: "admin",
            }).save(function (err) {
                if (err) {
                    logger.error("error while saving Role > " + err);
                }
                logger.info("added 'admin' to roles collection");
            });
        }
    });
}
var databaseService = {
    connectDB: connectDB,
};
module.exports = databaseService;
//# sourceMappingURL=database.service.js.map