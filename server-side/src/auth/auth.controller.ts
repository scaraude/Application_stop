import { Request, Response } from "express";
import { RoleEnum } from "../role/role.model";
import { userService } from "../user/user.service";
import { authService } from "./auth.service";

export const signup = async (req: Request, res: Response): Promise<Response> => {
  const { username, email, password } = req.body;

  await userService.createUser({ username, email, password, roles: [{ name: RoleEnum.USER }] });
  return res.status(201).send("User successfully created");
};

export const signin = async (req: Request, res: Response): Promise<Response | void> => {
  const { username, password } = req.body;

  const user = await userService.getUserByUsername(username);
  if (!user) {
    return res.status(404).send("User Not found.");
  }

  const isPasswordValide = authService.validatePassword(
    password,
    user.password
  );

  if (!isPasswordValide) {
    return res.status(401).send("Invalid Password!");
  }

  const rolesNamesRelatedToUser = user.roles.map((role) =>
    role.name
  );

  const token = authService.generateJwtToken({
    id: user._id,
    roles: rolesNamesRelatedToUser,
  });

  const authorities = [];

  for (let i = 0; i < user.roles.length; i++) {
    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  }
  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    roles: authorities,
    accessToken: token,
  });
};
