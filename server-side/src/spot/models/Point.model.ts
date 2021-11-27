import { Schema, Document } from "mongoose";

export interface Point extends Document {
    latitude: number;
    longitude: number;
}

export const pointSchema = new Schema<Point>({
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