// require('dotenv').config();
const User = require('../models/User');

var Cookies = require("cookies");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const GenerateToken = (req, res, user) => {
    console.log(req, res, user);
    const token = jwt.sign(
        { userId: user._id },
        process.env.TOKEN_KEY,
        { expiresIn: process.env.TOKEN_DELAY }
    )

    new Cookies(req, res).set('access_token', token, {
        httpOnly: false, //cookie not available through client js code
        secure: false // true to force https
    });
}

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then((user) => { 
                    GenerateToken(req, res, user); 
                    res.redirect('/');
                })
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur inconnu !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    GenerateToken(req, res, user);
                    res.redirect('/');
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};