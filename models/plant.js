const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String }, // nickname, if blank use type
    type: { type: String, required: true },
    image: { type: String },
    potSize: { type: Number, required: true },
    location: { type: "N" | "S" | "E" | "W" }, // window location
    userNotes: { type: String }
}, { timestamps: true })

// auto-generated from api or based off specific plant types:
// waterSchedule: {type: Number}, // #days between watering
// petFriendly: {type: Boolean},
// maintenance: {type: "High" | "Medium" | "Low"},
// light: {type: "Direct" | "Indirect"}

const Plant = mongoose.model('Item', plantSchema);

module.exports = Plant;