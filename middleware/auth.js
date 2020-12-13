const jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
    const token = req.cookies.get(process.env.TOKEN_NAME);
    jwt.verify(token, process.env.TOKEN_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({ error: error | 'Authentification required' });
            }
            else {
                req.user = { userId: decoded.userId, name: decoded.name };
                next();
            }
        });
}

exports.isOwner = (req, res, next) => {
    if (req.user.userId && req.user.userId === req.body.userId) {
        next();
    }
    else res.status(403).json({ error: error | 'Access denied' });
}