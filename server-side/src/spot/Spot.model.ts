import { Schema, model, Document } from "mongoose";
import { User } from "../user/user.model";

export interface Point extends Document {
  latitude: number;
  longitude: number;
}

const pointSchema = new Schema<Point>({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

export interface Spot extends Document {
  title: string;
  rating: number;
  gps: Point;
  author: User;
}

const spotSchema = new Schema<Spot>(
  {
    title: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 3 },
    gps: {
      type: pointSchema,
      required: true
    },
    mostValuableComment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    authorId: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  },
  { timestamps: true, }
);

export const spotModel = model<Spot>("Spot", spotSchema);
