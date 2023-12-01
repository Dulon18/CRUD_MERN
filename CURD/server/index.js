const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const StudentModel =require('./models/StudentModel')


const app = express()
app.use(cors())
app.use(express.json())

// Database Connection
let URI = "mongodb+srv://Dulon:dulon123@cluster0.taxqwuy.mongodb.net/CURD";

mongoose.connect(URI).then((res)=>{
    console.log("Successfully connected mongoose")
}).catch((err)=>{
    console.log(err)
})

//read or list
app.get('/', (req, res) => {
    StudentModel.find({})
    .then(students => res.json(students))
    .catch(err => res.json(err))
});

// create student
app.post("/createStudent", (req, res) => {
    StudentModel.create(req.body)
        .then(students => res.json(students))
        .catch(err => res.json(err))
})

// update student
app.get("/getStudent/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findById({_id:id})
        .then(students => res.json(students))
        .catch(err => res.json(err))
})
app.put("/updateStudent/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findByIdAndUpdate({ _id: id },
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address,
            nationality: req.body.nationality,
            email: req.body.email,
            phone: req.body.phone,
            admissionDate: req.body.admissionDate,
            courses: req.body.courses,
        })
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

//delete student
app.delete("/deleteStudent/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findByIdAndDelete({_id:id})
        .then(students => res.json(students))
        .catch(err => res.json(err))
})

app.listen(3030, ()=>
     {
        console.log('Server is running');
     }
)