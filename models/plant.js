const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String }, // nickname, if blank use type
    type: { type: String, required: true },
    image: { type: String },
    potSize: { type: Number, required: true },
    roomName: { type: String }, // plant location room name
    direction: { type: "N" | "S" | "E" | "W", required: true }, // window location
    userNotes: { type: String },
    waterSched: { type: Number }, // auto generated?
    petFriendly: { type: Boolean }, // auto generated?
    maintenance: { type: "High" | "Medium" | "Low" }, // auto generated?
    light: { type: "Direct" | "Indirect" } // auto generated?
}, { timestamps: true })

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;