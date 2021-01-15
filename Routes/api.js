const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) =>{
    Workout.find({}).then(workoutData => {
        res.json(workoutData)
    }).catch(err => res.json(err));
})


module.exports = router;