import { Schema, model, Document } from "mongoose";

export interface Comment {
  rating: number;
  text: string;
  spotId: string;
  authorId: string;
}

interface CommentSchema extends Comment, Document { }

const commentSchema = new Schema<CommentSchema>(
  {
    rating: { type: Number, required: true, min: 0, max: 3 },
    text: { type: String, maxLength: 256 },
    spotId: {
      type: Schema.Types.ObjectId,
      ref: "Spot",
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const commentModel = model<CommentSchema>("Comment", commentSchema);
