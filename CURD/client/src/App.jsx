import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListPage from './pages/ListPage'
import CreatePage from './pages/CreatePage'
import UpdatePage from './pages/UpdatePage'
function App() {

  return (
    <div className='bg-gray-800'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListPage />}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>
          <Route path='/update/:id' element={<UpdatePage/>}></Route>
          {/* <Route path='/delete/:id' element={List}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
