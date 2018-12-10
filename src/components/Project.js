import React, { Component } from 'react'

class Project extends Component {
  openModal = (event) => {
    event.preventDefault()
    console.log(this, event)
  }

  render() {
    const { projects } = this.props
    return(
      <div className="row no-gutters popup-gallery">
      { projects.map((project) => {
          const { name, img } = project
          return(
            <div className="col-lg-4 col-sm-6 project" key={name}>
              <button className="portfolio-box" onClick={this.openModal}>
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
              </button>
            </div>
          )
      })}
      </div>
    )
  }
}

export default Project;
