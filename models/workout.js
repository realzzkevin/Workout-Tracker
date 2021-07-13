const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the workout type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter the name of workout"
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
        
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;




