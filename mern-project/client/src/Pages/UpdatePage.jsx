import React from 'react';
import Navbar from '../components/common/AppNavbar';
import { useParams } from "react-router";


const UpdatePage = () => {
     const params = useParams();
     return (
          <div>
               <Navbar></Navbar>
               <updateForm id={params['id']}></updateForm>
          </div>
     );
};

export default UpdatePage;