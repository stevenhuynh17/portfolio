import React, { Component } from 'react'

class Carousel extends Component {
  createImages = (images) => {
    if(Array.isArray(images)) {
      return images.map((image, index) => {
        console.log(index)
        const check = index === 0 ? "carousel-item active" : "carousel-item"
        return(
          <div className={check} key={index}>
            <img className="d-block w-100 carousel" src={require("../" + image)} />
          </div>
        )
      })
    }
  }

  render() {
    const { images } = this.props
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          { this.createImages(images) }
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Carousel
