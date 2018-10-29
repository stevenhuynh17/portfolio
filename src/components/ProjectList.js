import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import demo from '../img/demo-image-01.jpg'

class ProjectList extends Component {
  render() {
    return(
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <Image src={demo} alt="" responsive/>
          </div>
          <div className="col-lg-6">
            <h4>TESTING</h4>
          </div>
        </div>


        <div className="col-lg-6">
          <h4>TESTING</h4>
        </div>
        <div className="col-lg-6">
          <Image src={demo} alt="" responsive/>
        </div>
      </div>
    )
  }
}

export default ProjectList;
