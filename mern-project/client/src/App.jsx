import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import ReadPage from './Pages/ReadPage.jsx';
import CreatePage from './Pages/CreatePage.jsx';
import UpdatePage from './Pages/UpdatePage.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" render={(props) => <ReadPage {...props} key={Date.now()}  />}/>
                <Route path="/create" render={(props) => <CreatePage {...props} key={Date.now()} />}/>
                <Route path="/update/:id" render={(props) => <UpdatePage {...props} key={Date.now()} />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;