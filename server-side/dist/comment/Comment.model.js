"use strict";
var mongoose = require("mongoose");
/**userId : {type: String, required : true},
 * updated: { type: Date, default: Date.now },
 * rating: { type: Number, required: true , min : 0, max : 3},
 * comment : String
 */
var commentSchema = mongoose.Schema({
    rating: { type: Number, required: true, min: 0, max: 3 },
    text: { type: String, maxLength: 256 },
    spotId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot",
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
module.exports = mongoose.model("Comment", commentSchema);
//# sourceMappingURL=Comment.model.js.map