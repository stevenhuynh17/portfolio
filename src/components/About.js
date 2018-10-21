import React, { Component } from 'react'

class About extends Component {
  render() {
    return(
      <section id="about" className="about-section">
      <div className="container">
        <div className="content">
          <h2>Built with Bootstrap 4</h2>
          <p>
            Grayscale is a free Bootstrap theme created by Start Bootstrap.
            It can be yours right now, simply download the template on
            The theme is open source, and you can use it for any purpose, personal or commercial.
          </p>
        </div>
        <img src="img/ipad.png" className="img-fluid" alt=""/>
      </div>
    </section>
    )
  }
}

export default About;
