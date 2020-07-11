import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'
import Maincomponent from './MainComponent';


function CustomNavbar() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" to="/">ROK-MANAGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/Update" to="/Update">Board</Nav.Link>
          </Nav>
          
          
        </Navbar.Collapse>
      </Navbar>
      <div className="translation_drop">
          <Maincomponent></Maincomponent>
        </div>
    </div>
  );
}

export default CustomNavbar;
