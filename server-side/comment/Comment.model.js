const mongoose = require("mongoose");

/**userId : {type: String, required : true},
 * updated: { type: Date, default: Date.now },
 * rating: { type: Number, required: true , min : 0, max : 3},
 * comment : String
 */
const commentSchema = mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 0, max: 3 },
    text: { type: String, maxLength: 256 },
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Spot",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
