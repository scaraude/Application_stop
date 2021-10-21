"use strict";
var mongoose = require("mongoose");
var roleSchema = mongoose.Schema({
    name: String,
}, { timestamps: true });
module.exports = mongoose.model("Role", roleSchema);
//# sourceMappingURL=role.model.js.map