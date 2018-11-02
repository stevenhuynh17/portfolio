import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import Background from '../img/close-up-laptop.jpg'
import ReduxIcon from './SVG/ReduxIcon'
import SQLIcon from './SVG/SQLIcon'
import { data } from '../utils/data'

class About extends Component {
  render() {
    const { title, content, icons, button } = data.about

    return(
      <section id="about" className="about-section">
        <div className="container text-center d-flex h-100 align-items-center">
          <section>
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">{title}</h2>
              <p className="text-white-50">
                {content}
              </p>
            </div>
            <div className="mb-5">
              <ReduxIcon />
              {icons.map((data) => {
                return(
                  <i key={data} className={"fab fa-4x mx-3 text-white-50 " + data}></i>
                )
              })}
              <SQLIcon />
            </div>
            <div>
              <a href="#projects" className="btn btn-primary js-scroll-trigger">
                {button}
              </a>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default About;
