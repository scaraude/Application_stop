/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const cors = require('cors');

// connection with DB
require("./services/database/connector.service")

// import routes
// const router = require('./routes/router');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

// parse request
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static('public'));

app.use(morgan('dev'));

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
} else {
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}

module.exports = app;