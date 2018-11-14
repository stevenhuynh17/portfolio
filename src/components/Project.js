import React, { Component } from 'react'
import Carousel from './Carousel'

class Project extends Component {
  render() {
    const { projects, renderBadges, renderDescription } = this.props

    return(
      <div>
        { projects.map((project, index) => {
            const { name, img, description, badges } = project
            const swap = index % 2 === 0 ? "col-lg-6" : "col-lg-6 order-lg-first"
            console.log(Array.isArray(img))
            return(
              <div key={name} className="row justify-content-center no-gutters">
                <div className="col-lg-6">
                  {
                    Array.isArray(img) ? <Carousel images={img} name={name} index={index}/> : <img className="img-fluid project" src={require("../" + img)} alt=""/>
                  }
                </div>
                <div className={swap}>
                  <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                      <div className="project-text w-100 my-auto text-center text-lg-left">
                        <h4 className="text-white">{name}</h4>
                          <ul className="mb-0 text-white-50">
                            { renderDescription(description) }
                          </ul>
                        <hr className="d-none d-lg-block mb-4 ml-0"/>
                        { renderBadges(badges) }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
    )
  }
}

export default Project;
