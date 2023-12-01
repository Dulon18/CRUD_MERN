import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const ListPage = () => {
     const [students,setStudents] = useState([])
     useEffect(() => {
          axios.get("http://localhost:3030")
               .then(result => setStudents(result.data))
               .catch(err => console.log(err))
     }, [])
     const handleDelete = (id) => {
          axios.delete('http://localhost:3030/deleteStudent/'+id)
               .then(result => {
                    console.log(result)
                    window.location.reload();
               })
               .catch(err => console.log(err))
     }
     return (
          <div className="container justify-content-center">
               <div className="">
                    <div className="text-center">
                         <h1 className="my-5 fw-bolder">List Of Students</h1>
                    </div>
                    <div className="">
                         <Link to={'/create'} className="btn btn-success fw-bold my-2">Add Student</Link>
                         <div className="responsive shadow">
                              <table className="table table-bordered table-hover">
                                   <thead className="bg-primary text-white fw-bold text-center">
                                        <th className="p-2">First Name</th>
                                        <th className="p-2">Last Name</th>
                                        <th className="p-2">Gender</th>
                                        <th className="p-2">Date of Birth</th>
                                        <th className="p-2">Nationality</th>
                                        <th className="p-2">Address</th>
                                        <th className="p-2">Email</th>
                                        <th className="p-2">Phone</th>
                                        <th className="p-2">Admission Date</th>
                                        <th className="p-2">Courses</th>
                                        <th className="p-2">Action</th>
                                   </thead>
                                   <tbody>
                                        {students.map((student) => (
                                             <tr key={student.id} className="py-3 text-center">
                                                  <td>{student.firstName}</td>
                                                  <td>{student.lastName}</td>
                                                  <td>{student.gender}</td>
                                                  <td>{student.dateOfBirth}</td>
                                                  <td>{student.nationality}</td>
                                                  <td>{student.address}</td>
                                                  <td>{student.email}</td>
                                                  <td>{student.phone}</td>
                                                  <td>{student.admissionDate}</td>
                                                  <td>{student.courses}</td>
                                                  <td>
                                                       <Link to={`/update/${student._id}`} type="button" className="btn btn-warning fw-bold text-primary mx-2">
                                                            Edit
                                                       </Link>
                                                       <button type="button" className="btn btn-danger fw-bold mx-2" onClick={() => handleDelete(student._id)}>
                                                            Delete
                                                       </button>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ListPage;