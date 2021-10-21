import { Schema, model } from "mongoose";

const pointSchema = new Schema({
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

const spotSchema = new Schema(
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
    authorId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const SpotModel = model("Spot", spotSchema);
