"use strict";
var authService = require("./auth.service");
var roleService = require("../role/role.service");
var authController = require("./auth.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });
    app.post("/api/auth/signup", [
        authService.validateAuthInput,
        authService.checkDuplicateUsername,
        authService.checkDuplicateEmail,
        roleService.checkRolesExisted,
    ], authController.signup);
    app.post("/api/auth/signin", authService.validateAuthInput, authController.signin);
};
//# sourceMappingURL=auth.routes.js.map