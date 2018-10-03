import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">HOME</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Projects
              </NavItem>
              <NavItem eventKey={3} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
