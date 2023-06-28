import { Document, model, Schema } from "mongoose";
import { Role } from "../role/role.model";

export interface User {
	username: string;
	email: string;
	password: string;
	roles: Role[];
}

export interface UserSchema extends Document, User { }

const userSchema = new Schema<UserSchema>(
	{
		username: { type: String, unique: true },
		email: { type: String, unique: true },
		password: String,
		roles: [
			{
				type: Schema.Types.ObjectId,
				ref: "Role",
			},
		],
	},
	{ timestamps: true }
);

export const userModel = model<UserSchema>("User", userSchema);
