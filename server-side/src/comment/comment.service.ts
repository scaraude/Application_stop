import { commentModel } from "./Comment.model";
import { Response, NextFunction, Request } from 'express'
import { RequestWithMaybeAuthInformation } from "../auth/types";

const isCommentOwner = async (req: RequestWithMaybeAuthInformation, res: Response, next: NextFunction): Promise<Response | void> => {
  const userId = req.userId;
  const { id: commentId } = req.body as Request["body"];

  try {
    const comment = await commentModel.findById(commentId);
    if (!comment || comment.authorId !== userId) {
      return res
        .status(401)
        .send({ message: "Unauthorized: You need to be the author" });
    }

    next();
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const commentService = {
  isCommentOwner,
};