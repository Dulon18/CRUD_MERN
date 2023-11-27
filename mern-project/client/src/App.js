import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import ReadPage from './Pages/ReadPage.jsx';
import CreatePage from './Pages/CreatePage.jsx';
import UpdatePage from './Pages/UpdatePage.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReadPage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
                <Route path="/update" element={<UpdatePage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;