const mongoose = require("mongoose");

const spotSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 3 },
    gps: { type: { lat: String, lon: String }, required: true },
    destinations: { type: Array(String), required: true },
    direction: {
      type: String,
      enum: [
        "Nord",
        "Nord-Est",
        "Est",
        "Sud-Est",
        "Sud",
        "Sud-Ouest",
        "Ouest",
        "Nord-Ouest",
      ],
    },
    roads: [String],
    access: String,
    advice: String,
    mostValuableComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    authorId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Spot", spotSchema);
