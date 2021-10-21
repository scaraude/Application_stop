"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotModel = void 0;
var mongoose_1 = require("mongoose");
var spotSchema = (0, mongoose_1.Schema)({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Comment",
    },
    authorId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });
exports.SpotModel = (0, mongoose_1.model)("Spot", spotSchema);
//# sourceMappingURL=Spot.model.js.map