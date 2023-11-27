const express=require('express');
const StudentController=require('../controller/StudentsController');
const router = express.Router();




// Student
router.post("/add-student",StudentController.createStudent);
router.get("/delete-student/:id",StudentController.deleteStudent);
router.post("/update-student/:id",StudentController.updateStudent);
router.get("/read-student",StudentController.readStudents);



module.exports=router;