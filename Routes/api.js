const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err.message));
});

router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    
      req.params.id
    ,
    {
      $push: {
        exercises: req.body,
      },
    },
    { new: true }
  )
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
// use run validators
//aggregate
//addFields

module.exports = router;
