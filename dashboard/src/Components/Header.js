import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../img/take-n-trace-logo.png';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth';

function Header(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

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
        {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);