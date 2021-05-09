const authService = require("./auth.service");
const roleService = require("../role/role.service");
const authController = require("./auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [authService.checkDuplicateUsernameOrEmail, roleService.checkRolesExisted],
    authController.signup
  );

  app.post("/api/auth/signin", authController.signin);
};
