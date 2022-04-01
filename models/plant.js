const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String }, // nickname, if blank use type
    type: { type: String }, // show example in form i.e. succulent, jade, fiddle leaf
    image: { type: String }, // start with URL
    potSize: { type: Number },
    roomName: { type: String },
    direction: {     // window location, will be dropdown menu
        type: String,
        enum: [
            "North",
            "South",
            "East",
            "West"
        ]
    },
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
// roomName: { type: String } // custom user created name, ability to sort & group plants by roomName
// sun: { type: "Full Sun" | "Indirect Sun" | "Shade"} // API generated?
// petFriendly: { type: Boolean }, // auto generated? based on API toxicity level?
// maintenance: { type: "High" | "Medium" | "Low" }, // auto generated based on API data?
// waterSched: { type: Number }, // auto generated, could be based off of drought/humidity resistant?

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;