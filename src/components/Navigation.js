import React, { Component } from 'react';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <Navbar.Header>
          <Navbar.Brand>
            <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className="collapse navbar-collapse" id="navbarResponsive">
            <NavItem bsStyle="nav-item" eventKey={1} href="#">
              About
            </NavItem>
            <NavItem bsStyle="nav-item" eventKey={2} href="#">
              Projects
            </NavItem>
            <NavItem bsStyle="nav-item" eventKey={3} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
