/* eslint-disable no-undef */
import express from "express";
import morgan from "morgan";
import errorHandler from "errorhandler";
import path from "path";
import cors from "cors";
import { logger } from "./utils/logger";
import { databaseService } from "./database/database.service";
import { authRouter } from "./auth/auth.routes";
import { userRouter } from "./user/user.routes";
import { spotRouter } from "./spot/spot.route";
import { commentRouter } from "./comment/comment.route";

export const app = express();

if (process.env.NODE_ENV === "development") {
	app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(morgan("dev"));

databaseService.connectDB();

app.get("/", (req, res) => {
	res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

authRouter(app);
userRouter(app);
spotRouter(app);
commentRouter(app);

app.get("/*", (req, res) => {
	res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

if (process.env.NODE_ENV === "development") {
	app.use(errorHandler());
} else {
	app.use((request, response) => {
		logger.error("404 => Path not found");
		response.status(500).send("Server Error");
	});
}
