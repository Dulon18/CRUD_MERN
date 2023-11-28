import React, { useEffect } from 'react';
import { isEmpty, SuccessToast, ErrorToast } from "../Helper/validation";
import { Update,Read, readStudentById } from "../Apiservices/CRUDServices";

const updateForm = (props) => {
     let firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses = useRef;

     const UpdateData = () => {
          let Student_firstName = firstName.value;
          let Student_lastName = lastName.value;
          let Student_gender = gender.value;
          let Student_dateOfBirth = dateOfBirth.value;
          let Student_nationality = nationality.value;
          let Student_address = address.value;
          let Student_email = email.value;
          let Student_phone = phone.value;
          let Student_admissionDate = admissionDate.value;
          let Student_courses = courses.value;

          if (isEmpty(Student_firstName)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_lastName)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_gender)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_dateOfBirth)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_nationality)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_address)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_email)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_phone)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_admissionDate)) {
               ErrorToast('Name Requird');
          }
          else if (isEmpty(Student_courses)) {
               ErrorToast('Name Requird');
          }
          else {
               Update(props.id,Student_firstName, Student_lastName, Student_gender,
                    Student_address, Student_admissionDate, Student_courses,
                    Student_dateOfBirth, Student_email, Student_nationality,
                    Student_phone).then((Result) => {
                         if (Result === true) {
                              SuccessToast("Updated");
                              firstName.value = "";
                              lastName.value = "";
                              gender.value = "";
                              dateOfBirth.value = "";
                              nationality.value = "";
                              address.value = "";
                              email.value = "";
                              phone.value = "";
                              admissionDate.value = "";
                              courses.value = "";
                         }
                         else {
                              ErrorToast('Failed');
                         }
                    })
          }
     }
     useEffect(() => {
          readStudentById(props.id).then((Result) => {
               firstName.value = Result[0]['firstName'];
               lastName.value = Result[0]['lastName'];
               gender.value = Result[0]['gender'];
               dateOfBirth.value = Result[0]['dateOfBirth'];
               nationality.value = Result[0]['nationality'];
               address.value = Result[0]['address'];
               email.value = Result[0]['email'];
               phone.value = Result[0]['phone'];
               admissionDate.value = Result[0]['admissionDate'];
               courses.value = Result[0]['courses'];
          })
     })

     return (
          <div className='container'>
               <div className="row">
                    <div className="col-4">
                         <label htmlFor="">First Name</label>
                         <input ref={(input) => firstName = input} type="text" />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Last Name</label>
                         <input type="text" ref={(input) => lastName = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Gender</label>
                         <input type="text" ref={(input) => gender = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Date of Birth</label>
                         <input type="date" ref={(input) => dateOfBirth = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Nationality</label>
                         <input type="text" ref={(input) => nationality = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Address</label>
                         <input type="text" ref={(input) => address = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Email</label>
                         <input type="text" ref={(input) => email = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Phone</label>
                         <input type="text" ref={(input) => phone = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">admissionDate</label>
                         <input type="date" ref={(input) => admissionDate = input} />
                    </div>
                    <div className="col-4">
                         <label htmlFor="">Courses</label>
                         <input type="text" ref={(input) => courses = input} />
                    </div>
                    <div className="col-4">
                         <button onClick={UpdateData} type="button" className='btn btn-info'>Update</button>
                    </div>
               </div>

          </div>
     );
};

export default updateForm;