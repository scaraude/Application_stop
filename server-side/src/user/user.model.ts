import { model, Schema, Document } from "mongoose";
import { Role } from "../role/role.model";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  roles: Role[];
}

const userSchema = new Schema<User>(
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

export const userModel = model<User>("User", userSchema);
