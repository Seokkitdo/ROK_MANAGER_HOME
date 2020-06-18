import React from 'react';
import '../App.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
function CustomNavbar() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" to="/">ROK-MANAGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/about" to="/about">Update</Nav.Link>
            
          </Nav>
          
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
