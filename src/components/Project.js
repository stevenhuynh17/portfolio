import React, { Component } from 'react'
import Carousel from './Carousel'

class Project extends Component {
  render() {
    const { projects, renderBadges, renderDescription } = this.props
    console.log(projects)
    return(
      <div class="row no-gutters popup-gallery">
      { projects.map((project) => {
          const { name, img, description, badges } = project
          return(
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                <img class="img-fluid" src={require("../" + img)} alt=""/>
                <div class="portfolio-box-caption">
                  <div class="portfolio-box-caption-content">
                    <div class="project-category text-faded">
                      Category
                    </div>
                    <div class="project-name">
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
