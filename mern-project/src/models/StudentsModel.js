// Student.js
const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
    required: true,
  },
  courses: {
    type: String,
    required: true,
  },
},
  {timestamps:true,versionKey:false}
);

const Students = mongoose.model('Students', studentsSchema);

module.exports = Students;
