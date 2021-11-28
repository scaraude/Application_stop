import { Schema, model, Document } from "mongoose";
import { User } from "../../user/user.model";
import { Emotion } from "../spot.types";
import { GeoApiCity, GeoCitySchema } from "./Destination.model";
import { Point, pointSchema } from "./Point.model";

export interface Spot extends Document {
  gps: Point;
  author: User;
  name: string;
  emotion: Emotion;
  imageUrl: URL;
  destinations: GeoApiCity[];
}

const spotSchema = new Schema<Spot>(
  {
    gps: {
      type: pointSchema,
      required: true
    },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: "name can't be empty" },
    emotion: { type: String, enum: Emotion, required: "Emotion can't be empty" },
    imageUrl: { type: String, required: "URL can't be empty" },
    destinations: { type: GeoCitySchema, required: "Destinations can't be empty" }
  },
  { timestamps: true }
);

export const spotModel = model<Spot>("Spot", spotSchema);
