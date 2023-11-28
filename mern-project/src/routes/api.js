const express=require('express');
const StudentController=require('../controller/StudentsController');
const router = express.Router();




// Student
router.post("/addStudent",StudentController.createStudent);
router.get("/delete-student/:id",StudentController.deleteStudent);
router.post("/update-student/:id",StudentController.updateStudent);
router.post("/readStudentById/:id",StudentController.readStudentById);
router.get("/read-student",StudentController.readStudent);



module.exports=router;