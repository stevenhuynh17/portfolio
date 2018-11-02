import React, { Component } from 'react'
import Highlight from '../img/bart.png'
import Project from './Project'

class ProjectList extends Component {
  render() {
    const data = {
      "Featured": {
        name: "Station Locator",
        description: [
          "Front end project that utilizes Google Maps and BART API to display all station locations in the Bay Area",
          "Users can find local attractions, food, and shopping nearby each station through the Yelp API"
        ],
        badges: ["Knockout.js", "googlemaps-api", "bart-api", "yelp-api", "javaScript", "html5", "ccs3"]
      },
      "Projects": [
        {
          name: "Car Catalog",
          description: [
            "Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail",
            "Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models"
          ],
          badges: ["Python", "Flask", "SQLAlchemy", "OAuth", "AWS", "html5", "ccs3"]
        },
        {
          name: "Car Catalog",
          description: [
            "Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail",
            "Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models"
          ],
          badges: ["Python", "Flask", "SQLAlchemy", "OAuth", "AWS", "html5", "ccs3"]
        }
      ]
    }
    const { featured } = data
    const { name, description, badges } = featured
    
    return(
      <section id="projects" class="projects-section bg-light">
        <div class="container">
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={Highlight} alt=""/>
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>BART Station Locator</h4>
                <ul class="text-black-50 mb-4">
                  <li>
                    Front end project that utilizes Google Maps and BART API to display all station locations in the Bay Area
                  </li>
                  <li>
                    Users can find local attractions, food, and shopping nearby each station through the Yelp API
                  </li>
                </ul>
                {}
                <span class="badge badge-pill badge-secondary">Knockout.js</span>
                <span class="badge badge-pill badge-secondary">googlemaps-api</span>
                <span class="badge badge-pill badge-secondary">bart-api</span>
                <span class="badge badge-pill badge-secondary">yelp-api</span>
                <span class="badge badge-pill badge-secondary">javaScript</span>
                <span class="badge badge-pill badge-secondary">html5</span>
                <span class="badge badge-pill badge-secondary">ccs3</span>
              </div>
            </div>
          </div>
          <Project />
        </div>
      </section>
    )
  }
}

export default ProjectList;
