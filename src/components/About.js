import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import Background from '../img/close-up-laptop.jpg'
import ReduxIcon from './SVG/ReduxIcon'
import SQLIcon from './SVG/SQLIcon'

class About extends Component {
  render() {
    return(
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About</h2>
              <p className="text-white-50">
                I enjoy making code functional, connecting dots, seeing the
                logic flow, and bringing the contents to life.
                My journey so far includes attending Hack Reactor in San Francisco
                and completing Udacity's Full-Stack Developer and React Nanodegree.
              </p>
            </div>
          </div>
          <div className="container mb-5">
            <i className="fab fa-react fa-4x mx-2 text-white-50"></i>
            <ReduxIcon />
            <i className="fab fa-html5 fa-4x mx-3 text-white-50"></i>
            <i className="fab fa-css3-alt fa-4x mx-3 text-white-50"></i>
            <i className="fab fa-python fa-4x mx-3 text-white-50"></i>
            <i className="fab fa-js-square fa-4x mx-3 text-white-50"></i>
            <i className="fab fa-node-js fa-4x mx-3 text-white-50"></i>
            <i className="fab fa-aws fa-4x mx-3 text-white-50"></i>
            <SQLIcon />
          </div>
        </div>
          <a href="#projects" className="btn btn-primary js-scroll-trigger">
            See Projects
          </a>
      </section>
    )
  }
}

export default About;
