// studentRouter.js

const express = require("express");
const router = express.Router();
const Students = require("../model/Students");
// const Student = require("../model/Students");

// Add a GET route to fetch all students
router.get("/", async (req, res) => {
  try {
    const students = await Students.find({});
    res.status(200).json(students);
  } catch (error) {
    console.log("Couldn't find students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ... (existing POST route for adding students)
router.post("/", async (req, res) => {
  // const newUser = { ...req.body };
  try {
    const savedUser = await Students.create({ ...req.body });
    res.status(200).json(savedUser);
    console.log("succesfully saved user:" + savedUser);
  } catch (error) {
    console.log("can't save user");
  }
});
router.delete("/", async (req, res) => {
  try {
    const { ids } = req.body; // Assuming you send an array of student IDs to delete

    // Use the Mongoose model to delete students by their IDs
    const result = await Students.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount > 0) {
      res
        .status(200)
        .json({ message: "Selected students deleted successfully" });
    } else {
      res.status(404).json({ message: "No students found with the given IDs" });
    }
  } catch (error) {
    console.error("Error deleting students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
