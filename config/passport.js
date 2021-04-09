/* eslint-disable no-undef */
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const User = require('../models/User');
const Spot = require('../models/Spot');
const Comment = require('../models/Comment');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    // if (!user.password) {
    //   return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' });
    // }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('info', {msg: 'You need to log in'})
  res.redirect('/login');
};

/**
 * Ownership Required middleware.
 */
exports.isSpotOwner = (req, res, next) => {
  Spot.findOne({ _id: req.params.id })
  .then((thing) => {
    if (thing.userId == req.user._id)
    {
      next()
    }else{
      req.flash('errors', {msg: 'Unauthorize access'})
      res.status(403).redirect('/');
    }
  })
  .catch((error) => {
    console.log(error);
    res.status(404).redirect('/');
  })
};

exports.isCommentOwner = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
  .then((thing) => {
    if (thing.userId == req.user._id)
    {
      next()
    }else{
      req.flash('errors', {msg: 'Unauthorize access'})
      res.status(403).redirect('/');
    }
  })
  .catch((error) => {
    console.log(error);
    res.status(404).redirect('/');
  })
};
