import { model, Schema, Document } from "mongoose";

enum RoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR"
}

export interface Role extends Document {
  name: RoleEnum;
}

const roleSchema = new Schema<Role>({
  name: String,
}, { timestamps: true });

export const roleModel = model<Role>("Role", roleSchema);
