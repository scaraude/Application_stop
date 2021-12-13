import { authService } from "./auth.service";
import { roleService } from "../role/role.service";
import * as authController from "./auth.controller";
import { Express } from "express";

export const authRouter = (app: Express) => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"/api/auth/signup",
		[
			authService.validateAuthInput,
			authService.checkDuplicateUsername,
			authService.checkDuplicateEmail,
			roleService.checkRolesExisted,
		],
		authController.signup
	);

	app.post(
		"/api/auth/signin",
		authService.validateAuthInput,
		authController.signin
	);
};
