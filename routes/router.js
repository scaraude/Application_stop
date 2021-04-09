// ---------> Front route are (will be) in React

/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
// const passport = require('passport');
const path = require('path');

const passportConfig = require('../config/passport');

// Controllers
// const homeController = require('../controllers/home')
const userController = require('../controllers/user');
const commentCtrl = require('../controllers/comment');
const spotCtrl = require('../controllers/spot');

// Basic auth
router.get('/', (req, res) => {
  console.log('get home')
  res.sendFile(path.join( process.cwd(), "public", "index.html"));
})

router.post('/login', userController.postLogin);
router.post('/signup', userController.postSignup);
router.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);

// Social auth
// router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
// router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// router.get('/auth/twitter', passport.authenticate('twitter'));
// router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });

// API Comment
router.post('/api/comment/:spotId', commentCtrl.createComment); // passportConfig.isAuthenticated, commentCtrl.createComment);    
router.put('/api/comment/:id', commentCtrl.modifyComment); // passportConfig.isAuthenticated, passportConfig.isCommentOwner, commentCtrl.modifyComment); 
router.delete('/api/comment/:id', commentCtrl.deleteComment); // passportConfig.isAuthenticated, passportConfig.isCommentOwner, commentCtrl.deleteComment);  
router.get('/api/comment/one/:id', commentCtrl.getOneComment); 
router.get('/api/comment/:spotId', commentCtrl.getAllCommentsOneSpot);
if(process.env.NODE_ENV === "development")
  router.get('/api/comment/', commentCtrl.getAllComments);

// API Spot
router.post('/api/spots/create', spotCtrl.createSpot); // passportConfig.isAuthenticated, spotCtrl.createSpot);
router.put('/api/spots/:id', spotCtrl.modifySpot); // passportConfig.isAuthenticated, passportConfig.isSpotOwner, spotCtrl.modifySpot);
router.delete('/api/spots/:id', spotCtrl.deleteSpot); // passportConfig.isAuthenticated, passportConfig.isSpotOwner, spotCtrl.deleteSpot);
router.get('/api/spots/:id', spotCtrl.getOneSpot);
router.get('/api/spots/',spotCtrl.getAllSpots);

//Map 
router.get('/popup',spotCtrl.popUp);
router.get('/formside',spotCtrl.formSidebar);

router.get('/*', (req, res) => {
  console.log('catch all')
  res.sendFile(path.join( process.cwd(), "public", "index.html"));
})

module.exports = router;