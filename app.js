const express = require('express');
const path = require('path');
//config
const db = require('./config/db-connection');

//routes
const spotRoutes = require('./router/spot');

// const stuffRoutes = require('./router/stuff');
// const userRoutes = require('./router/user');
// const configuration = require('./middleware/websiteConf');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views')); 

// app.use(configuration.autorizeCORS);

app.use(express.json());

app.use(express.static('public'));//jsuis pas trop sure de comprendre à quoi ça sert...

app.get('/', (req, res) => {
    // res.sendFile('pages/index', { root: __dirname });
    res.render('pages/accueil', { root: __dirname });
})

app.get('/connexion', (req, res) => {
    // res.sendFile('pages/index', { root: __dirname });
    res.render('pages/user/login', { root: __dirname });
})

app.use('/api/spots', spotRoutes);

module.exports = app;