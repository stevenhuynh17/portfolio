import React, { Component } from 'react'
import LightBox from './LightBox'

class Project extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  state = {
    modalActive: false
  }

  toggleModal = (event, index) => {
    // event.preventDefault()
    console.log("TESTING")
    if(document.body.style.overflow === "hidden") {
      document.body.style.overflow = "scroll"
    } else {
      document.body.style.overflow = "hidden"
    }

    this.setState({
      modalActive: !this.state.modalActive,
      index: index
    })
  }

  render() {
    const { projects } = this.props
    return(
      <div className="row no-gutters popup-gallery">
      { projects.map((project, index) => {
          const { name, img } = project
          return(
            <div className="col-lg-4 col-sm-6 project" key={name}>
              <button className="portfolio-box" onClick={(e) => this.toggleModal(e, index)}>
                <img className="img-fluid project-img" src={require("../" + img)} alt=""/>
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
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
      {this.state.modalActive ?
        (<LightBox handleClick={this.toggleModal} projects={projects} index={this.state.index} exit={this.handleKeyPress}/>)
        : null }
      </div>
    )
  }
}

export default Project;
