const router = require("express").Router();
const mongoose = require("mongoose");
const db = require('../models');


router.get("/workouts", (req, res) => {
    db.Workout.aggregate([
        { $addFields: {totalDuration: { $sum: "$exercises.duration"}}},
    ])
    .sort({ day: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })

});

router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })

});

router.get("/workouts/range", (req, res) => {

    db.Workout.aggregate([
        { $addFields: {totalDuration: { $sum: "$exercises.duration"}}}
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })

});


module.exports = router;