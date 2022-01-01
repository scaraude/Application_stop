import { Document, Schema } from "mongoose";

type Longitude = number;
type Latitude = number;
export interface Point {
	type: "Point",
	coordinates: [ Longitude, Latitude ]
}

export interface PointSchema extends Point, Document {}

export const pointSchema = new Schema<PointSchema>({
	type: {
		type: String,
		enum: ["Point"],
		required: true
	},
	coordinates: {
		type: [Number],
		required: true
	}
});