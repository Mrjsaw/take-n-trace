import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


export const Header = () => (

    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
       <Navbar.Brand href="/">
      <img
        alt=""
        src="../imgages/dhl.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Take n Track
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       

        <Nav className="ml-auto">
      <Nav.Link href="/SendPackage">Send a package</Nav.Link>
      <Nav.Link href="/About">About us</Nav.Link>
      <Nav.Link href="/Login">Login </Nav.Link>
    </Nav>
            
    
      </Navbar.Collapse>
    </Navbar>

)