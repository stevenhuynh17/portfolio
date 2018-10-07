import React, { Component } from 'react';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop className="navbar navbar-expand-lg navbar-light" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </Button>
            <Nav className="collapse navbar-collapse" id="navbarResponsive">
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
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
