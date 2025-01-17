import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import validator from "validator";
import { RoleEnum } from "../role/role.model";
import { User } from "../user/user.model";
import { userService } from "../user/user.service";
import { logger } from "../utils/logger";
import { config } from "./auth.config";
import { RequestWithMaybeAuthInformation } from "./types";

interface JwtAuthPayload extends JwtPayload {
  id: string,
  roles: RoleEnum[],
}

const verifyToken = (req: RequestWithMaybeAuthInformation, res: Response, next: NextFunction): Response | void => {
	const token = req.headers["x-access-token"] as string | undefined;

	if (!token) {
		return res.status(403).send({ message: "No token provided!" });
	}
	try {
		const tokenPayload = <JwtAuthPayload>verify(token, config.secret);
		if (!tokenPayload) {
			return res.status(401).send({ message: "Unauthorized!" });
		}
	
		req.userId = tokenPayload.id;
		next();
	} catch (error: any) {
		return res.status(401).send({ message: error.message });
	}
	
};

const checkDuplicateUsername = async (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.body;

	try {
		const user = await userService.getUserByUsername(username);
		if (user) {
			res.status(403).send("Failed : Username is already use !");
			return;
		}
	} catch (error) {
		logger.error(`error ${error}`);
		res.status(500).send(error);
	}

	next();
};

const checkDuplicateEmail = async (req: Request, res: Response, next: NextFunction) => {
	const { email } = req.body;

	try {
		const user = await userService.getUserIdByEmail(email);

		if (user) {
			res.status(403).send("Failed! Email is already in use!");
			return;
		}
	} catch (error) {
		logger.error(`error ${error}`);
		res.status(500).send(error);
	}

	next();
};

const validatePassword = (inputPassword: string, userPassword: User["password"]) => {
	return bcrypt.compareSync(inputPassword, userPassword);
};

const generateJwtToken = (payload: JwtAuthPayload) => {
	const oneDayInSecond = 60 * 60 * 24;
	return sign(payload, config.secret, {
		expiresIn: oneDayInSecond,
	});
};

const validateAuthInput = (req: Request, res: Response, next: NextFunction) => {
	const { username, email } = req.body;

	if (email && !validator.isEmail(email)) {
		res.status(403).send("Email is not valid !");
	}

	if (username && !validator.isAlphanumeric(username)) {
		res.status(403).send("username can only contain letters and numbers");
	}

	if (username && !validator.isLength(username, { min: 3, max: 20 })) {
		res.status(403).send("username must be between 3 and 20 charaters");
	}

	next();
};

export const authService = {
	generateJwtToken,
	validateAuthInput,
	verifyToken,
	checkDuplicateEmail,
	checkDuplicateUsername,
	validatePassword,
};
