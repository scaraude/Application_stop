"use strict";
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    profile: {
        name: String,
        gender: String,
        location: String,
        picture: String,
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
        },
    ],
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);
//# sourceMappingURL=user.model.js.map