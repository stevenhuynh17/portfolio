import React, { Component } from 'react'
import demo from '../img/ipad.png'

class ProjectList extends Component {
  render() {
    return(
      <div className="container">
        <h4>TESTING</h4>
        <img src={demo} alt=""/>
        <img src={"../img/ipad.png"}/>
        <img src="../img/ipad.png"/>
      </div>
    )
  }
}

export default ProjectList;
