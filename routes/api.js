const router = require("express").Router();
const mongoose = require("mongoose");
const db = require('../models');


router.get("/workouts", (req, res) => {
    /*db.Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });*/

    db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
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

    db.Exercise.create(req.body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: _id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $lookup: {
                from: 'workouts',
                localField: 'excercises',
                foreignField: '_id',
                as: 'excercises'
            }
        }
    ])
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    });
});


module.exports = router;