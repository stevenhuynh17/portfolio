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
    console.log(projects)
    return(
      <section class="p-0" id="projects" ref={refProp}>
        <div class="container-fluid p-0">
            <Project projects={projects}/>
        </div>
      </section>

    )
  }
}

export default ProjectList;
