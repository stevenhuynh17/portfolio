import React, { Component } from 'react';

class Navigation extends Component {
  state = {
    hide: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarCollapse);
    this.setState({
      hide: false
    })
  }

  navbarCollapse = (event) => {
    if(window.pageYOffset > 100) {
      this.setState({
        hide: true
      })
    } else {
      this.setState({
        hide: false
      })
    }
  }

  render() {
    let navbar = this.state.hide
      ? "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
      : "navbar navbar-expand-lg navbar-light fixed-top"

    const { scroll } = this.props
    const { about, header, projects, contact } = this.props.sections

    return (
      <nav className={navbar} id="mainNav" onScroll={this.navbarCollapse}>
      <div className="container">
        <a className="navbar-brand" onClick={(event) => scroll(event, header)}>Home</a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" onClick={(event) => scroll(event, about)}>
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item" onClick={(event) => scroll(event, projects)}>
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item" onClick={(event) => scroll(event, contact)}>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navigation;
