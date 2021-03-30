/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const session = require('express-session');
const flash = require('express-flash');
const cors = require('cors');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

// connection with DB
require('./config/db-connection');
// import authentification strategies
require('./config/passport');
// import routes
const router = require('./routes/router');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

// parse request
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: new MongoStore({
        url: process.env.MONGODB_URI,
        autoReconnect: true,
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use(express.static('public'));

app.use(morgan('dev'));

app.use(router);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}

module.exports = app;