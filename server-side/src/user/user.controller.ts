import { userService } from "./user.service";
import { Request, Response } from "express";

const allAccess = (req: Request, res: Response) => {
	res.status(200).send("Public Content.");
};

const userBoard = (req: Request, res: Response) => {
	res.status(200).send("User Content.");
};

const adminBoard = (req: Request, res: Response) => {
	res.status(200).send("Admin Content.");
};

const moderatorBoard = (req: Request, res: Response) => {
	res.status(200).send("Moderator Content.");
};

const deleteUser = async (req: Request, res: Response) => {
	const { email } = req.body;
	try {
		await userService.deleteUserByEmail(email);
		res.status(200).send("User account deleted");
	} catch (err) {
		res.status(500).send(err);
	}
};

export const userController = {
	allAccess,
	userBoard,
	adminBoard,
	moderatorBoard,
	deleteUser
};