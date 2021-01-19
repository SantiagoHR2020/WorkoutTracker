const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err.message));
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
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

//aggregate
//addFields

module.exports = router;
