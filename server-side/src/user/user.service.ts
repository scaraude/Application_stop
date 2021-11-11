import bcrypt from "bcrypt";
import { User, userModel } from "./user.model";
import { roleModel } from "../role/role.model";

const createUser = async ({ username, email, password, roles }: User): Promise<User> => {
  const user = new userModel({
    username,
    email,
    password: bcrypt.hashSync(password, 8),
  });

  const rolesNamesRelatedToUser = roles.map(role => role.name) ?? ["user"];

  const rolesRelatedToUser = await roleModel.find({
    name: { $in: rolesNamesRelatedToUser },
  });

  user.roles = rolesRelatedToUser.map((role) => role._id);

  return user.save();
};

const getUserByUsername = async (username: User["username"]) => {
  return userModel.findOne({ username }).populate("roles", "-__v");
};

const getUserIdByEmail = async (email: User["email"]) => {
  return userModel.findOne({ email }).populate("roles", "-__v");
};

const deleteUserByEmail = async (email: User["email"]) => {
  return userModel.deleteOne({ email });
};

export const userService = {
  createUser,
  getUserByUsername,
  getUserIdByEmail,
  deleteUserByEmail,
};