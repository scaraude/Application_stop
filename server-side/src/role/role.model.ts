import { model, Schema, Document } from "mongoose";

export enum RoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR"
}

export interface Role {
  name: RoleEnum;
}

export interface RoleSchema extends Document, Role { }

const roleSchema = new Schema<RoleSchema>({
  name: String,
}, { timestamps: true });

export const roleModel = model<RoleSchema>("Role", roleSchema);
