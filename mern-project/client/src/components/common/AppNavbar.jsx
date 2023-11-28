import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

function AppNavbar() {
     return (
          <>
               <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                         <Navbar.Brand>MERN CRUD</Navbar.Brand>
                         <Nav className="me-auto">
                              <Nav.Link ><NavLink to="/">List</NavLink></Nav.Link>
                              <Nav.Link ><NavLink to="/create">Create</NavLink></Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>
          </>
     );
}

export default AppNavbar;