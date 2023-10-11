const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  StudID: String,
  fullName: {
    type: String,
    required: true,
  },
  ageRange: String,
  country: String,
  sector: String,
  village: String,
  language: String,
  educationLevel: String,
  sessionType: String,
  email: {
    type: String,
    required: true,
  },
  phone: String,
  availableDate: String, // You can change this to Date if needed
  availableHours: String,
  professionalSkill: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
