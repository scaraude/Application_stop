const express = require('express');
const path = require('path');

//import config
const db = require('./config/db-connection');
const config = require('./config/config');

// import routes
const spotRoutes = require('./router/spot');
const userRoutes = require('./router/user');
const commentRoutes = require('./router/comment');

const app = express();

// set the view engine to ejs
app.set('view engine', config.view_engine);
app.set('views', path.join(__dirname, 'public/views')); 

// parse request
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static('public'));

// Routes Views
app.get('/', (req, res) => {
    res.render('pages/accueil', { root: __dirname });
})

app.get('/login', (req, res) => {
    res.render('pages/user/login', { root: __dirname });
})

app.get('/signup', (req, res) => {
    res.render('pages/user/signup', { root: __dirname });
})

app.use('/api/spots', spotRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comment', commentRoutes);



module.exports = app;