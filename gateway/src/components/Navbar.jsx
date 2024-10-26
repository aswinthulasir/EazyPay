import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class NavbarComp extends Component {
  render() {
    return (
      
        <Navbar expand="lg" fixed="top" className="w-100 bg-body-secondary">
          <Container>
            <Navbar.Brand href="/" className="text-primary">Eazy-pay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <NavDropdown title="Privacy & Security" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/privacy-policy">Privacy Policy</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/security">Security</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/money-back">Money Back</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/transactions">Transactions</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/logout" className="text-danger">Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       
    );
  }
}
