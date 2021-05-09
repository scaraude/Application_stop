const authService = require("../auth/auth.service");
const spotController = require("./spot.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/spot/", spotController.getAllSpots);
  app.get("/api/spot/:id", spotController.getOneSpot);
  app.post(
    "/api/spot/create",
    [authService.verifyToken],
    spotController.createSpot
  );
  app.put(
    "/api/spot/:id",
    [authService.verifyToken],
    spotController.modifySpot
  );
  app.delete(
    "/api/spot/:id",
    [authService.verifyToken],
    spotController.deleteSpot
  );
};
