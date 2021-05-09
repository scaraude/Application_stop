const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profile: {
        name: String,
        gender: String,
        location: String,
        picture: String
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);