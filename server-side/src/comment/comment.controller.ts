import { Request, Response } from "express";
import { RequestWithMaybeAuthInformation } from "../auth/types";
import { spotModel } from "../spot/Spot.model";
import { userModel } from "../user/user.model";
import { commentModel } from "./Comment.model";

export const createComment = async (req: RequestWithMaybeAuthInformation, res: Response): Promise<Response> => {
  const { rating, text } = req.body;

  try {
    const spot = await spotModel.findById(req.params.spotId);
    const user = await userModel.findById(req.userId);

    if (!spot || !user) {
      throw new Error(`createComment failed > user or spot not found > spot ${spot} / user ${user}`)
    }
    const comment = new commentModel({
      rating,
      text,
      spot: spot._id,
      user: user._id,
    });

    await comment.save();
    return res
      .status(201)
      .json({ message: "Commentaire enregistré :", comment: comment });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const modifyComment = (req: Request, res: Response) => {
  commentModel.updateOne({ _id: req.params.id }, { ...req.body })
    .then((info) =>
      res.status(200).json({
        message: "Modification enregistrée !",
        nbOfModifiedFields: info.n,
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

export const deleteComment = (req: Request, res: Response) => {
  commentModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

export const getOneComment = (req: Request, res: Response) => {
  commentModel.findOne({ _id: req.params.id })
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(404).json({ error }));
};

export const getAllCommentsOneSpot = (req: Request, res: Response) => {
  commentModel.find({ spot: req.params.spotId })
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json({ error }));
};

export const getAllComments = (req: Request, res: Response) => {
  commentModel.find()
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json({ error }));
};
