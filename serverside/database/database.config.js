const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
    HOST: "localhost",
    PORT: 27017,
    DB: "HitchHikeAppLocalDB"
};