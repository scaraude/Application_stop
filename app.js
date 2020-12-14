const express = require('express');
const path = require('path');
const morgan = require('morgan');

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
    res.render('pages/accueil', { root: __dirname });
})

app.get('/login', (req, res) => {
    res.render('pages/user/login', { root: __dirname });
})

app.get('/signup', (req, res) => {
    res.render('pages/user/signup', { root: __dirname });
})

// API 
app.use('/api/spots', spotRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;