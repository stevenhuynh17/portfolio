import React, { Component } from 'react';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop className="" id="mainNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="collapse navbar-collapse" id="navbarResponsive">
              <NavItem className="nav-item" eventKey={1} href="#">
                About
              </NavItem>
              <NavItem className="nav-item" eventKey={2} href="#">
                Projects
              </NavItem>
              <NavItem className="nav-item" eventKey={3} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
