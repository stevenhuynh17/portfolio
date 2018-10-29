import React, { Component } from 'react';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop className="" id="">
        <Navbar.Header>
          <Navbar.Brand>
            <a className="" href="#page-top">Start Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className="" id="">
            <NavItem className="" eventKey={1} href="#">
              About
            </NavItem>
            <NavItem className="" eventKey={2} href="#">
              Projects
            </NavItem>
            <NavItem className="" eventKey={3} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
