"use strict";
var User = require("../user/user.model");
var Role = require("./role.model");
var ROLES = ["user", "admin", "moderator"];
var checkRolesExisted = function (req, res, next) {
    if (req.body.roles) {
        for (var i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Role " + req.body.roles[i] + " does not exist!",
                });
                return;
            }
        }
    }
    next();
};
var isAdmin = function (req, res, next) {
    User.findById(req.userId).exec(function (err, user) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        Role.find({
            _id: { $in: user.roles },
        }, function (err, roles) {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            for (var i = 0; i < roles.length; i++) {
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({ message: "Require Admin Role!" });
            return;
        });
    });
};
var isModerator = function (req, res, next) {
    User.findById(req.userId).exec(function (err, user) {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        Role.find({
            _id: { $in: user.roles },
        }, function (err, roles) {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            for (var i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }
            }
            res.status(403).send({ message: "Require Moderator Role!" });
            return;
        });
    });
};
var roleService = {
    ROLES: ROLES,
    checkRolesExisted: checkRolesExisted,
    isAdmin: isAdmin,
    isModerator: isModerator,
};
module.exports = roleService;
//# sourceMappingURL=role.service.js.map