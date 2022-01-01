import { Document, model, Schema } from "mongoose";
import { Emotion } from "../spot.types";
import { GeoApiCity } from "./Destination.model";
import { Point, pointSchema } from "./Point.model";

export interface Spot extends Document {
  location: Point;
  authorId: string;
  name: string;
  emotion: Emotion;
  destinations: GeoApiCity["code"][];
}

const spotSchema = new Schema<Spot>(
	{
		location: {
			type: pointSchema,
			required: true
		},
		authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
		name: { type: String, required: "name can't be empty" },
		emotion: { type: String, enum: Emotion, required: "Emotion can't be empty" },
		destinations: { type: [String], required: "Destinations can't be empty" }
	},
	{ timestamps: true }
);

export const spotModel = model<Spot>("Spot", spotSchema);
