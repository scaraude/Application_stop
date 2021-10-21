import authService from "../auth/auth.service";
import roleService from "../role/role.service";
import { userController } from "./user.controller";
import { Express, Request, Response, NextFunction } from 'express'

module.exports = function (app: Express) {
  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);

  app.get(
    "/api/test/user",
    [authService.verifyToken],
    userController.userBoard
  );

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

  app.post(
    "/api/user/delete",
    [authService.verifyToken],
    userController.deleteUser
  );
};
