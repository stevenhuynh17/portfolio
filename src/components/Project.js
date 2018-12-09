import React, { Component } from 'react'
import Carousel from './Carousel'

class Project extends Component {
  render() {
    const { projects, renderBadges, renderDescription } = this.props
    console.log(projects)
    return(
      <div className="row no-gutters popup-gallery">
      { projects.map((project) => {
          const { name, img, description, badges } = project
          return(
            <div className="col-lg-4 col-sm-6 project" key={name}>
              <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                <img className="img-fluid project-img" src={require("../" + img)} alt=""/>
                <div className="portfolio-box-caption">

                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      {name}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )
      })}
      </div>
    )
  }
}

export default Project;
