import React, { Component } from 'react'
import CarCatalog from '../img/carCatalog.png'
import NearbyNews from '../img/nearbyNews.jpeg'

class Project extends Component {
  render() {
    const { projects } = this.props
    //order-lg-first
    return(
      <div>
        { projects.map((project, index) => {
            const { name, img, description, badges } = project
            const swap = index % 2 === 0 ? "col-lg-6" : "col-lg-6 order-lg-first"

            return(
              <div className="row justify-content-center no-gutters">
                <div className="col-lg-6">
                  <img className="img-fluid project" src={require("../" + img)} alt=""/>
                </div>
                <div className={swap}>
                  <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                      <div className="project-text w-100 my-auto text-center text-lg-left">
                        <h4 className="text-white">{name}</h4>
                          <ul className="mb-0 text-white-50">
                            { description.map((info) => {
                                return(
                                  <li>{info}</li>
                                )
                              })
                            }
                          </ul>
                        <hr className="d-none d-lg-block mb-4 ml-0"/>
                        { badges.map((info) => {
                            return(
                              <span class="badge badge-pill badge-secondary">{info}</span>
                            )
                          })
                        }
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
