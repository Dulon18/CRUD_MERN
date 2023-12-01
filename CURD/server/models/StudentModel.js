const mongoose = require('mongoose')

const StudentsSchema = new mongoose.Schema({

     firstName:String,
     lastName:String,
     gender:String,
     dateOfBirth:String,
     nationality:String,
     address:String,
     email:String,
     phone:String,
     admissionDate:String,
     courses:String,
})

const StudentModel = mongoose.model('students', StudentsSchema)
module.exports = StudentModel