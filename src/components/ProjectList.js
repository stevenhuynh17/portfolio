import React, { Component } from 'react'
import Project from './Project'

class ProjectList extends Component {
  render() {
    const data = {
      "featured": {
        name: "BART Station Locator",
        img: "img/bart.png",
        description: [
          "Front end project that utilizes Google Maps and BART API to display all station locations in the Bay Area",
          "Users can find local attractions, food, and shopping nearby each station through the Yelp API"
        ],
        badges: ["Knockout.js", "googlemaps-api", "bart-api", "yelp-api", "javaScript", "html5", "ccs3"]
      },
      "projects": [
        {
          name: "Car Catalog",
          img: "img/carCatalog.png",
          description: [
            "Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail",
            "Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models"
          ],
          badges: ["Python", "Flask", "SQLAlchemy", "OAuth", "AWS", "html5", "ccs3"]
        },
        {
          name: "Car Catalog",
          img: "img/nearbyNews.jpeg",
          description: [
            "Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail",
            "Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models"
          ],
          badges: ["Python", "Flask", "SQLAlchemy", "OAuth", "AWS", "html5", "ccs3"]
        }
      ]
    }
    const { featured, projects } = data
    const { name, img, description, badges } = featured

    return(
      <section id="projects" class="projects-section bg-light">
        <div class="container">
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={require("../" + img)} alt=""/>
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>{name}</h4>
                <ul class="text-black-50 mb-4">
                  { description.map((result) => {
                      return(
                        <li>{result}</li>
                      )
                  })}
                </ul>
                { badges.map((result) => {
                  return(
                    <span class="badge badge-pill badge-secondary">{result}</span>
                  )
                })}
              </div>
            </div>
          </div>
          <Project projects={projects}/>
        </div>
      </section>
    )
  }
}

export default ProjectList;
