import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import Background from '../img/close-up-laptop.jpg'
import ReduxIcon from './SVG/ReduxIcon'
import SQLIcon from './SVG/SQLIcon'

class About extends Component {
  render() {
    const icons = ["fa-react", "fa-html5", "fa-css3-alt", "fa-python", "fa-js-square", "fa-node-js", "fa-aws"]
    return(
      <section id="about" className="about-section">
        <div className="container text-center d-flex h-100 align-items-center">
          <section>
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About</h2>
              <p className="text-white-50">
                I enjoy making code functional, connecting dots, seeing the
                logic flow, and bringing the contents to life.
                My journey so far includes attending Hack Reactor in San Francisco
                and completing Udacity's Full-Stack Developer and React Nanodegree.
              </p>
            </div>
            <div className="mb-5">
              <ReduxIcon />
              {icons.map((data) => {
                return(
                  <i className={"fab fa-4x mx-3 text-white-50 " + data}></i>
                )
              })}
              <SQLIcon />
            </div>
            <div>
              <a href="#projects" className="btn btn-primary js-scroll-trigger">
                See Projects
              </a>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default About;
