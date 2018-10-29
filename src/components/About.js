import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class About extends Component {
  render() {
    return(
      <Jumbotron>
        <div className="container">
          <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </div>
      </Jumbotron>
    )
  }
}

export default About;
