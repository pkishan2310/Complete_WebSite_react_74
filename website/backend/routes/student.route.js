let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Students
router.get("/get", (req, res) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE student
router
  .route("/update-student/:id")
  // Get Single Student
  .get((req, res) => {
    studentSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// Update Student Data
router.put("/update-student/:id", async (req, res) => {
  let result = await studentSchema.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );

  res.send(result);
});

// Delete Student
router.delete("/delete-student/:id", (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

//Search Api
router.get("/search/:key", async (req, res) => {
  let result = await studentSchema.find({
    $or: [
      { name: { $regex: req.params.key } },
      { phone: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
      { msg: { $regex: req.params.key } },
    ],
  });

  res.send(result);
});

module.exports = router;
