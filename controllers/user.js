/* eslint-disable no-undef */
const passport = require('passport');
const validator = require('validator');
const User = require('../models/User');

/**
* POST /login
* Sign in using email and password.
*/
exports.postLogin = (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Email address is not valid' });
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password must be filled.' });

    if (validationErrors.length) {
        req.flash('errors', validationErrors);
        return res.redirect('/login');
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            req.flash('errors', info);
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            req.flash('success', { msg: 'Success! You are logged in.' });
            res.redirect(req.session.returnTo || '/');
        });
    })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */
exports.logout = (req, res) => {
    req.logout();
    req.session.destroy((err) => {
        if (err) console.log('Error : Failed to destroy the session during logout.', err);
        req.user = null;
        res.redirect('/');
    });
};

/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = (req, res, next) => {

    const {pseudo, email, password} = req.body;
    
    const validationErrors = [];

    if (!validator.isAlphanumeric(pseudo) || !validator.isLength(pseudo, { min: 3, max: 20 })) validationErrors.push({ msg: 'Email adress is not valid' });
    if (!validator.isEmail(email)) validationErrors.push({ msg: 'Email adress is not valid' });
    if (!validator.isStrongPassword(password, { minLowercase: 0, minSymbols: 0 })) validationErrors.push({ msg: 'Password must be at least 8 characters, 1 uppercase, 1 number' });

    if (validationErrors.length) {
        req.flash('errors', validationErrors);
        return res.redirect('/signup');
    }

    const user = new User({
        profile: {pseudo: pseudo},
        email: validator.normalizeEmail(email, { gmail_remove_dots: false }),
        password: password
    });

    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { return next(err); }
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address already exists.' });
            return res.redirect('/signup');
        }
        user.save((err) => {
            if (err) { return next(err); }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
};

/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeleteAccount = (req, res, next) => {
    User.deleteOne({ _id: req.user.id }, (err) => {
      if (err) { return next(err); }
      req.logout();
      req.flash('info', { msg: 'Your account has been deleted.' });
      res.redirect('/');
    });
  };