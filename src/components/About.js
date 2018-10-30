import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import Background from '../img/ipad.png'

class About extends Component {
  render() {
    return(
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
              <p className="text-white-50">
                Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
              </p>
            </div>
          </div>
          <img src={Background} className="img-fluid" alt=""/>
        </div>
      </section>
    )
  }
}

export default About;
