const mongoose = require('mongoose');

/**userId : {type: String, required : true},
 * updated: { type: Date, default: Date.now },
 * score: { type: Number, required: true , min : 0, max : 3},
 * comment : String
*/
const userSchema = mongoose.Schema({
    userId : {type: String, required : true},
    updated: { type: Date, default: Date.now },
    score: { type: Number, required: true , min : 0, max : 3},
    comment : String
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);