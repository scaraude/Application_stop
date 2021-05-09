const authService = require("../auth/auth.service");
const roleService = require("../role/role.service");
const userController = require("./user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);

  app.get("/api/test/user", [authService.verifyToken], userController.userBoard);

  app.get(
    "/api/test/mod",
    [authService.verifyToken, roleService.isModerator],
    userController.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authService.verifyToken, roleService.isAdmin],
    userController.adminBoard
  );
};