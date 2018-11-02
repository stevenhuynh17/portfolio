import React, { Component } from 'react'
import CarCatalog from '../img/carCatalog.png'
import NearbyNews from '../img/nearbyNews.jpeg'

class Project extends Component {
  render() {
    const data = {
      "CarCatalog": {
        name: "Car Catalog",
        description: [
          "Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail",
          "Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models"
        ],
        badges: ["Python", "Flask", "SQLAlchemy", "OAuth", "AWS", "html5", "ccs3"]
      }
    }
    console.log(data.CarCatalog)

    return(
      <div>
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={CarCatalog} alt=""/>
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Car Catalog</h4>
                  <ul className="mb-0 text-white-50">
                    <li>Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail</li>
                    <li>Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models</li>
                  </ul>
                <hr className="d-none d-lg-block mb-4 ml-0"/>

                <span class="badge badge-pill badge-secondary">Python</span>
                <span class="badge badge-pill badge-secondary">Flask</span>
                <span class="badge badge-pill badge-secondary">SQLAlchemy</span>
                <span class="badge badge-pill badge-secondary">OAuth</span>
                <span class="badge badge-pill badge-secondary">AWS</span>
                <span class="badge badge-pill badge-secondary">html5</span>
                <span class="badge badge-pill badge-secondary">ccs3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <img className="img-fluid" src={NearbyNews} alt=""/>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Nearby News</h4>
                <p className="mb-0 text-white-50">
                  <ul className="mb-0 text-white-50">
                    <li>Full-stack project built with React, Node.js/Express, MySQL, Watson API and deployed through AWS EC2</li>
                    <li>Users search news based on the location input where results are displayed in GIFs with visual cues for sentiment rating</li>
                  </ul>
                </p>
                <hr className="d-none d-lg-block mb-4 ml-0"/>
                <span class="badge badge-pill badge-secondary">React</span>
                <span class="badge badge-pill badge-secondary">Node.js</span>
                <span class="badge badge-pill badge-secondary">Express</span>
                <span class="badge badge-pill badge-secondary">MySQL</span>
                <span class="badge badge-pill badge-secondary">AWS</span>
                <span class="badge badge-pill badge-secondary">watson-api</span>
                <span class="badge badge-pill badge-secondary">html5</span>
                <span class="badge badge-pill badge-secondary">ccs3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Project;
