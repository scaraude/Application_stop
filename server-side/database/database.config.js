const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

module.exports = {
  DATABASE_HOST: DATABASE_HOST || "localhost",
  DATABASE_PORT: DATABASE_PORT || 27017,
  DB: DATABASE_NAME || "HitchHikeAppLocalDB",
  getMongoURI: () =>
    // eslint-disable-next-line max-len
    `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@cluster0.t6jtg.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
};
