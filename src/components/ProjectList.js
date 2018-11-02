import React, { Component } from 'react'
import Project from './Project'

class ProjectList extends Component {
  renderBadges = (badges) => {
    return badges.map((badge) => {
      return(
        <span class="badge badge-pill badge-secondary">{badge}</span>
      )
    })
  }

  renderDescription = (data) => {
    return data.map((result) => {
      return(
        <li>{result}</li>
      )
    })
  }

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
    const { renderBadges, renderDescription } = this
    const { featured, projects } = data
    const { name, img, description, badges } = featured

    return(
      <section id="projects" class="projects-section bg-light">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={require("../" + img)} alt=""/>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>{name}</h4>
                <ul className="text-black-50 mb-4">
                  { renderDescription(description) }
                </ul>
                { renderBadges(badges) }
              </div>
            </div>
          </div>
          <Project
            projects={projects}
            renderBadges={renderBadges}
            renderDescription={renderDescription}/>
        </div>
      </section>
    )
  }
}

export default ProjectList;
