const mongoose = require('mongoose');

/**
 * title: { type: String, required: true },
 * score: { type: Number, required: true , min : 0, max : 3},
 * destinations: { type: Array(String), required: true },
 * direction: { type : String, enum : ["Nord", "Nord-Est", "Est", "Sud-Est", "Sud", "Sud-Ouest", "Ouest", "Nord-Ouest"]},
 * roads: [String],
 * gps: {type : {lat : String, lon : String}, required: true},
 * access: String,
 * advice: String, 
 * userId: { type: String, required: true },
 * mostValuableCommentId : String,
 * updated: { type: Date, default: Date.now }
 * */
const spotSchema = mongoose.Schema({
    title: { type: String, required: true },
    score: { type: Number, required: true , min : 0, max : 3},
    gps: {type : {lat : String, lon : String}, required: true},
    userId: { type: String, required: true },
    destinations: { type: Array(String), required: true },
    direction: { type : String, enum : ["Nord", "Nord-Est", "Est", "Sud-Est", "Sud", "Sud-Ouest", "Ouest", "Nord-Ouest"]},
    roads: [String],
    access: String,
    advice: String, 
    mostValuableCommentId : String,
}, {timestamps: true});

module.exports = mongoose.model('Spot', spotSchema);