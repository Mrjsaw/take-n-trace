import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../img/take-n-trace-logo.png';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
      <img src={logo} alt="Take 'n Trace logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/packages">Packages</Nav.Link>
          <Nav.Link href="/couriers">Couriers</Nav.Link>
          <Nav.Link href="/statistics">Statistics</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;