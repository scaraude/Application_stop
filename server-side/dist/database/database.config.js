"use strict";
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var DATABASE_HOST = process.env.DATABASE_HOST;
var DATABASE_PORT = process.env.DATABASE_PORT;
var DATABASE_NAME = process.env.DATABASE_NAME;
var DATABASE_USERNAME = process.env.DATABASE_USERNAME;
var DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
module.exports = {
    DATABASE_HOST: DATABASE_HOST || "localhost",
    DATABASE_PORT: DATABASE_PORT || 27017,
    DB: DATABASE_NAME || "HitchHikeAppLocalDB",
    getMongoURI: function () {
        // eslint-disable-next-line max-len
        return "mongodb+srv://" + DATABASE_USERNAME + ":" + DATABASE_PASSWORD + "@cluster0.t6jtg.mongodb.net/" + DATABASE_NAME + "?retryWrites=true&w=majority";
    },
};
//# sourceMappingURL=database.config.js.map