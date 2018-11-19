import React, { Component } from 'react'
import ReduxIcon from './SVG/ReduxIcon'
import SQLIcon from './SVG/SQLIcon'
import { data } from '../utils/data'

class About extends Component {
  render() {
    const { title, content, icons, button } = data.about
    const { refProp, scroll, section } = this.props

    return(
      <section id="about" className="about-section" ref={refProp}>
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
            <button onClick={() => scroll(section)} className="btn btn-primary">{button}</button>
          </section>
        </div>
      </section>
    )
  }
}

export default About;
