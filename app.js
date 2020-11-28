const express = require('express');

//config
const db = require('./config/db-connection');

//routes
const spotRoutes = require('./router/spot');

// const userRoutes = require('./router/user');
// const configuration = require('./middleware/websiteConf');

const app = express();

// app.use(configuration.autorizeCORS);

app.use(express.json());

app.use(express.static('public'));//jsuis pas trop sure de comprendre à quoi ça sert...

app.get('/', (req, res) => {
    res.sendFile('public/views/index.html', { root: __dirname });
})

app.use('/api/spots', spotRoutes);

module.exports = app;