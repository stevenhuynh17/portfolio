import React, { Component } from 'react'

class LightBox extends Component {
  render() {
    console.log(this.props)
    return(
      <div id="myModal-active" className="modal">
        <h1>TESTINGGG</h1>
        <span className="close cursor" onClick={this.props.handleClick}>&times;</span>
      </div>
    )
  }
}

export default LightBox
