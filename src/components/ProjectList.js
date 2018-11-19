import React, { Component } from 'react'
import Project from './Project'
import { data } from '../utils/data'

class ProjectList extends Component {
  renderBadges = (badges) => {
    return badges.map((badge) => {
      return(
        <span key={badge} className="badge badge-pill badge-secondary">{badge}</span>
      )
    })
  }

  renderDescription = (data) => {
    return data.map((result, index) => {
      return(
        <li key={index}>{result}</li>
      )
    })
  }

  render() {
    const { renderBadges, renderDescription } = this
    const { featured, projects } = data
    const { name, img, description, badges } = featured
    const { refProp } = this.props

    return(
      <section id="projects" className="projects-section bg-light" ref={refProp}>
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={require("../" + img)} alt=""/>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>{name}</h4>
                <ul className="text-black-50 mb-4">
                  { renderDescription(description) }
                </ul>
                { renderBadges(badges) }
              </div>
            </div>
          </div>
          <Project
            projects={projects}
            renderBadges={renderBadges}
            renderDescription={renderDescription}/>
        </div>
      </section>
    )
  }
}

export default ProjectList;
