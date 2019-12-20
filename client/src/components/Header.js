import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Footer.css';
import logo from '../img/take-n-trace-logo.png';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
         <a class="navbar-brand" href="/"><img src={logo} alt="logo"/></a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Tracking</Nav.Link>
          <Nav.Link href="/plan">Send a package</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;