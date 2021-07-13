//@ts-check
const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("api/worksouts");

router.post("api/workouts");

router.get("api/workouts/range");



module.exports = router;