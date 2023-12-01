import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const CreatePage = () => {
     const[firstName,setFirstName]=useState()
     const[lastName,setLastName]=useState()
     const[gender,setGender]=useState()
     const[dateOfBirth,setDateOfBirth]=useState()
     const[nationality,setNationality]=useState()
     const[address,setAddress]=useState()
     const[email,setEmail]=useState()
     const[phone,setPhone]=useState()
     const[admissionDate,setAdmissionDate]=useState()
     const [courses, setCourse] = useState()
     const navigate = useNavigate()

     const Submit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:3030/createStudent", { firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses })
               .then(result => {
                    console.log(result)
                    navigate('/')
               })
               .catch(err => console.log(err))
     }
     return (
          <div className="container justify-content-center">
               <div className="">
                    <div className="text-center">
                         <h1 className="my-5 fw-bolder">Create New Students</h1>
                    </div>
                    <div className="card shadow-lg border-0">
                         <div className="card-body p-4">
                              <form onSubmit={Submit}>
                                   <div className="row">
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">First Name</label>
                                                  <input type="text" className="form-control" placeholder="Enter First Name"
                                                  onChange={(e) => setFirstName(e.target.value)}/>
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Last Name</label>
                                                  <input type="text" className="form-control" placeholder="Enter Last Name"
                                                       onChange={(e) => setLastName(e.target.value)}/>
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Gender</label>
                                                  <select onChange={(e) => setGender(e.target.value)} className="form-select" aria-label="Default select example">
                                                       <option  disabled>Select Gender</option>
                                                       <option value="Male">Male</option>
                                                       <option value="Female">Female</option>
                                                  </select>
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Date Of Birth</label>
                                                  <input type="date" className="form-control" onChange={(e) => setDateOfBirth(e.target.value)} />
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Nationality</label>
                                                  <input type="text" onChange={(e) => setNationality(e.target.value)} className="form-control" placeholder="Enter nationality" />
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Address</label>
                                                  <input type="text" onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Enter Address" />
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Email</label>
                                                  <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Phone</label>
                                                  <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone number" />
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Date of Admission</label>
                                                  <input type="date" onChange={(e) => setAdmissionDate(e.target.value)} className="form-control" />
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className="mb-3">
                                                  <label htmlFor="" className="form-label">Course</label>
                                                  <input type="text" onChange={(e) => setCourse(e.target.value)} className="form-control" placeholder="Enter Course Name" />
                                             </div>
                                        </div>
                                   </div>
                                   <button className="btn btn-success fw-bold mx-2">Save</button>
                                   <Link to={'/'} className="btn btn-danger fw-bold ">Back</Link>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CreatePage;