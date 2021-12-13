import { authService } from "../auth/auth.service";
import * as spotController from "./spot.controller";
import { Request, Response, NextFunction, Express } from "express";

export const spotRouter = (app: Express) => {
	app.use(function (req: Request, res: Response, next: NextFunction) {
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
