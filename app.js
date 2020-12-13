const express = require('express');
const path = require('path');
const morgan = require('morgan');
const Cookies = require("cookies");

// connection with DB
require('./config/db-connection');

// import routes
const spotRoutes = require('./router/spot');
const userRoutes = require('./router/user');
const commentRoutes = require('./router/comment');

const app = express();

app.set('view engine', process.env.VIEW_ENGINE);
app.set('views', path.join(__dirname, 'public/views')); 

// parse request
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(express.static('public')); 

app.use(morgan('dev'));


// Routes Views
app.get('/', (req, res) => {
    res.render('pages/accueil');
})

app.get('/login', (req, res) => {
    res.render('pages/user/login');
})

app.get('/signup', (req, res) => {
    res.render('pages/user/signup');
})

// API 
app.use('/api/spots', spotRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;