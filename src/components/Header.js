import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'

class Header extends Component {
  render() {
    return(
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="text-center">
            <h1 className="text-uppercase">Grayscale</h1>
            <h2 className="margin-auto">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
            <a href="#about" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
