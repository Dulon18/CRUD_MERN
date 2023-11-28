import axios from "axios";

export async function createSudentRequest(firstName, lastName, gender,
     dateOfBirth, nationality, address, email, phone, admissionDate, courses) {
     let URL = "/api/v1/addStudent";
     let postBody = {

          firstName:firstName,
          lastName:lastName,
          gender:gender,
          dateOfBirth:dateOfBirth,
          nationality:nationality,
          address:address,
          email:email,
          phone:phone,
          admissionDate:admissionDate,
          courses:courses,
     }
    try {
        let res = await axios.post(URL,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}

export async function readSudentRequest(postBody) {
     let URL = "/api/v1/read-student";
    try {
        let res=await axios.post(URL);
        if(res.status===200){
            return res.data;
        }
        else{
             return false;
        }

    }catch (e) {
         return false;
    }
}
export async function readStudentById(firstName, lastName, gender,
     dateOfBirth, nationality, address, email, phone, admissionDate, courses,id){

     let URL = "/api/v1/readProductById/"+id;
     let postBody = {
          firstName:firstName,
          lastName:lastName,
          gender:gender,
          dateOfBirth:dateOfBirth,
          nationality:nationality,
          address:address,
          email:email,
          phone:phone,
          admissionDate:admissionDate,
          courses:courses,
     }
    try {
        let res = await axios.post(URL,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
 }

export async function updateStudentRequest(firstName, lastName, gender,
     dateOfBirth, nationality, address, email, phone, admissionDate, courses,id){

     let URL = "/api/v1/update-student/"+id;
     let postBody = {
          firstName:firstName,
          lastName:lastName,
          gender:gender,
          dateOfBirth:dateOfBirth,
          nationality:nationality,
          address:address,
          email:email,
          phone:phone,
          admissionDate:admissionDate,
          courses:courses,
     }
    try {
        let res = await axios.post(URL,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
 }


export async function deleteStudentRequest(id){

     let URL = "/api/v1/delete-student/"+id;
    try {
        let res=await axios.post(URL);
        if(res.status===200){
            return res.data;
        }
        else{
             return false;
        }

    }catch (e) {
         return false;
    }
}