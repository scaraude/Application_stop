const mongoose = require('mongoose');

/**userId : {type: String, required : true},
 * updated: { type: Date, default: Date.now },
 * score: { type: Number, required: true , min : 0, max : 3},
 * comment : String
*/
const commentSchema = mongoose.Schema({
    userId : {type: String, required : true},
    spotId : {type: String, required : true},
    score: { type: Number, required: true , min : 0, max : 3},
    text : { type: String, maxLength: 256}
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);