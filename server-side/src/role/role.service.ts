import { userModel } from "../user/user.model";
import { RoleEnum, roleModel } from "./role.model";
import {
  Request,
  Response,
  NextFunction
} from "express"

const ROLES = ["user", "admin", "moderator"];

const checkRolesExisted = (req: Request, res: Response, next: NextFunction): void => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }

  next();
};

const isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req;
  const user = await userModel.findById(req.userId).exec()

  if (!user) {
    res.status(403);
    return;
  }

  roleModel.find(
    {
      _id: { $in: user.roles },
    },
    (err, roles) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === RoleEnum.ADMIN) {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Require Admin Role!" });
      return;
    }
  );
};

const isModerator = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req;
  const user = await userModel.findById(userId).exec();

  if (!user) {
    res.status(500).send({ message: "User not found !" });
    return;
  }

  const roles = await roleModel.find({ _id: { $in: user.roles }, }).exec();

  if (!roles) {
    res.status(500).send({ message: "User doesn't have a role" });
    return;
  }

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === RoleEnum.MODERATOR) {
      next();
      return;
    }
  }

  res.status(403).send({ message: "Require Moderator Role!" });
  return;
};

export const roleService = {
  ROLES,
  checkRolesExisted,
  isAdmin,
  isModerator,
};