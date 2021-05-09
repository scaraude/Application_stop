const authService = require("../auth/auth.service");
const roleService = require("../role/role.service");
const commentController = require("./comment.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/comment/one/:id", commentController.getOneComment);
  app.get("/api/comment/:spotId", commentController.getAllCommentsOneSpot);
  //TODO: réparer cette route (get all)
  app.get(
    "/api/comment/all",
    [authService.verifyToken, roleService.isAdmin],
    commentController.getAllComments
  );
  app.post(
    "/api/comment/:spotId",
    [authService.verifyToken],
    commentController.createComment
  );
  app.put(
    "/api/comment/:id",
    [authService.verifyToken],
    commentController.modifyComment
  );
  app.delete(
    "/api/comment/:id",
    [authService.verifyToken],
    commentController.deleteComment
  );
};
