const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String }, // nickname, if blank use type
    type: { type: String, required: true }, // show example in form i.e. succulent, jade, fiddle leaf
    image: { type: String }, // start with URL
    potSize: { type: Number, required: true },
    roomName: { type: "Bedroom" | "Dining Room" | "Kitchen" | "Living Room" | "Office" }, // room, dropdown menu
    direction: { type: "N" | "S" | "E" | "W", required: true }, // window location, dropdown menu
    userNotes: { type: String },
    // task is not editable by user, plant will only have 1 task at a time
    task: {
        completed: { type: Boolean }, // button to complete task
        waterSchedule: { type: Number } // # of days between watering task based on date added?
    }
}, { timestamps: true })

// FUTURE GOALS!!!
// API to look up plant type
// Image upload
// sun: { type: "Full Sun" | "Indirect Sun" | "Shade"} // API generated?
// petFriendly: { type: Boolean }, // auto generated? based on API toxicity level?
// maintenance: { type: "High" | "Medium" | "Low" }, // auto generated based on API data?
// waterSched: { type: Number }, // auto generated, could be based off of drought/humidity resistant?

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;