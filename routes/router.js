const express = require('express');
const router = express.Router();
const passport = require('passport');

const passportConfig = require('../config/passport');

// Controllers
const homeController = require('../controllers/home')
const userController = require('../controllers/user');
const commentCtrl = require('../controllers/comment');
const spotCtrl = require('../controllers/spot');

// Home 
router.get('/', homeController.getHome);

// Basic auth
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);
router.get('/logout', userController.logout);
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);
router.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);

// Social auth
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

// API Comment
router.post('/api/comment/:spotId', passportConfig.isAuthenticated, commentCtrl.createComment);    
router.put('/api/comment/:id', passportConfig.isAuthenticated, passportConfig.isCommentOwner, commentCtrl.modifyComment); 
router.delete('/api/comment/:id', passportConfig.isAuthenticated, passportConfig.isCommentOwner, commentCtrl.deleteComment);  
router.get('/api/comment/one/:id', commentCtrl.getOneComment); 
router.get('/api/comment/:spotId', commentCtrl.getAllCommentsOneSpot);    
router.get('/api/comment/', commentCtrl.getAllComments);    //amené a être supp

// API Spot
router.post('/api/spots/', passportConfig.isAuthenticated, spotCtrl.createSpot);
router.put('/api/spots/:id', passportConfig.isAuthenticated, passportConfig.isSpotOwner, spotCtrl.modifySpot);
router.delete('/api/spots/:id', passportConfig.isAuthenticated, passportConfig.isSpotOwner, spotCtrl.deleteSpot);
router.get('/api/spots/:id', spotCtrl.getOneSpot);
router.get('/api/spots/',spotCtrl.getAllSpots);

module.exports = router;