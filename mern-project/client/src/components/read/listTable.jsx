import React, { useEffect, useState } from 'react';
import { SuccessToast, ErrorToast } from "../Helper/validation";
import Read from "../common/AppNavbar";
import Delete from "../common/AppNavbar";
import { withRouter } from "react-router"

const listTable = (props) => {

     let [DataList, setDataList] = useState;

     useEffect(() => {
          Read().then((Result) => {
               setDataList(Result)
          });
     }, []);

     const DeleteItem = (id) => {
          Delete(id).then((Result) => {
               if (Result === true)
               {
                    SuccessToast("Deleted");
                    props.history.push("/");
               }
               else {
                    ErrorToast("Fail");
               }
          })

     }
     const UpdateItem = (id) => {
          props.history.push("/update/"+id);
     }

     if (DataList.length > 0)
     {
          return (
               <div>
                    <table className='table'>
                         <thead>
                              <tr>
                                   <th>First Name</th>
                                   <th>Last Name</th>
                                   <th>Gender</th>
                                   <th>Date of birth</th>
                                   <th>Nationality</th>
                                   <th>Address</th>
                                   <th>Email</th>
                                   <th>Phone</th>
                                   <th>Admission Date</th>
                                   <th>Course</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   DataList.map((item, i)=>
                                   {
                                        return(
                                             <tr>
                                                  <td>{item.firstName}</td>
                                                  <td>{item.lastName}</td>
                                                  <td>{item.gender}</td>
                                                  <td>{item.dateOfBirth}</td>
                                                  <td>{item.nationality}</td>
                                                  <td>{item.address}</td>
                                                  <td>{item.email}</td>
                                                  <td>{item.phone}</td>
                                                  <td>{item.admissionDate}</td>
                                                  <td>{item.courses}</td>
                                                  <td>
                                                       <button onClick={DeleteItem.bind(this,item._id)} className='btn btn-warning mx-2'>Edit</button>
                                                       <button onClick={UpdateItem.bind(this, item._id)}  className='btn btn-danger mx-2'>Delete</button>
                                                  </td>
                                             </tr>
                                        )
                                   })
                              }
                         </tbody>
                    </table>
               </div>
          );
     }

};

export default withRouter(listTable);