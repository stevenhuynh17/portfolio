export const data = {
  "header": {
    name: "Steven Huynh",
    content: "I am a full-stack web developer, athlete, chef, gamer and nerd.",
    quote: {
      author: "Fred Rogers",
      content: '"There is no normal life that is free of pain. It’s the very wrestling with our problems that can be the impetus for our growth."'
    },
    button: "Find Out More"
  },
  "about": {
    title: "About",
    content: "I enjoy making code functional, connecting dots, seeing the logic flow, and bringing the contents to life. My journey so far \n" +
      "includes attending Hack Reactor in San Francisco and completing Udacity's Full-Stack Developer and React Nanodegree.",
    icons: ["fa-react", "fa-html5", "fa-css3-alt", "fa-python", "fa-js-square", "fa-node-js", "fa-aws"],
    button: "See Projects"
  },
  "contact": {
    linkedin: "https://www.linkedin.com/in/stevenhuynh17/",
    github: "https://github.com/stevenhuynh17",
    email: "stevenhuynh17@gmail.com"
  },
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
      name: "Nearby News",
      img: "img/nearbyNews.jpeg",
      description: [
        "Full-stack project built with React, Node.js/Express, MySQL, Watson API and deployed through AWS EC2",
        "Users search news based on the location input where results are displayed in GIFs with visual cues to indicate a sentiment rating"
      ],
      badges: ["React", "Node.js", "Express", "MySQL", "AWS", "watson-api", "html5", "ccs3"]
    }
  ]
}
