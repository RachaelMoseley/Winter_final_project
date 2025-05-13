import { Link } from 'react-router-dom'; 
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//Make sure to check typos
//as link connects React Router & Bootstrap
// '/' is the url to navigate to the component

const AppNavBar = () => {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand href="#home">Navigation</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home Page</Nav.Link>
                    <Nav.Link as={Link} to="/about">AboutMePage</Nav.Link>
                    


                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/data">DataAnalysis</NavDropdown.Item>
                       
            
                    
                
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default AppNavBar;