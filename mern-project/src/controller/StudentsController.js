const StudentModel = require('../models/StudentsModel');


//create
exports.createStudent = async(req, res)=> {
    let reqBody=req.body;
    try{
        let result=await StudentModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

// read
exports.readStudent = async(req, res)=> {

let query = {}
let Projection ="firstName,lastName,gender,dateOfBirth,nationality,address,email,phone,admissionDate,courses"
let result = await StudentModel.find(query, Projection, (err, result) => {
     if (err)
     {
          res.status(400).json({status:"fail",data:err})
     }
     else
     {
          res.status(200).json({status:"success",data:result})
     }
});
}

// update
exports.updateStudent = async (req, res) => {
    let id=req.params.id;
    let reqBody=req.body;
    let query={_id:id};
    try{
        let result=await StudentModel.updateOne(query,reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (err) {
        res.status(400).json({status:"fail",data:err})
    }
}

//delete

exports.deleteStudent = async(req, res)=> {
    let id=req.params.id;
    let query={_id:id};
    try{
        let result=await StudentModel.deleteOne(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}
