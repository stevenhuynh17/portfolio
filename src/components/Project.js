import React, { Component } from 'react'

class Project extends Component {
  render() {
    return(
      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
        <div class="col-xl-3 col-lg-7">
          <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt=""/>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>Shoreline</h4>
            <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
