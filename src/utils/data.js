export const data = {
  "header": {
    name: "Steven Huynh",
    content: "I am a full-stack web developer, athlete, chef, gamer and nerd.",
    quote: {
      author: "Bill Gates",
      content: '"Software is a great combination between artistry and engineering."'
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
      name: "BART Station Locator",
      img: "img/bart.png",
      github: "https://github.com/stevenhuynh17/udacity_map",
      description: [
        "Front end project that utilizes Knockout.js, Google Maps, and BART API to display all station locations in the Bay Area.",
        "Users can click on each individual marker or search for stations to find the station location.",
        "Each location marker links to local attractions, food, and shopping nearby each station through the Yelp API."
      ],
      badges: ["Knockout.js", "googlemaps-api", "bart-api", "yelp-api", "javaScript", "html5", "ccs3"]
    },
    {
      name: "Car Catalog",
      img: "img/carCatalog.png",
      github: "https://github.com/stevenhuynh17/udacity_catalog",
      description: [
        "Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail.",
        "Users login via OAuth with their Google accounts to perform CRUD functions to generate new car brands and/or modals in their profile that will be shared to the public in order to allow users to make informed decisions when shopping for a new vehicle."
      ],
      badges: ["Python", "Flask", "SQLAlchemy", "OAuth", "AWS", "html5", "ccs3"]
    },
    {
      name: "Nearby News",
      img: "img/nearbyNews.jpeg",
      github: "https://github.com/stevenhuynh17/surprisejalapeno",
      description: [
        "Full-stack team project utilizing React, Node.js/Express, MySQL, Watson API and deployed through AWS EC2.",
        "Users search news based on the desired location where results are displayed in GIFs with visual cues to let the reader be aware of how negative or positive the article's contents are, according to Watson."
      ],
      badges: ["React", "Node.js", "Express", "MySQL", "AWS", "watson-api", "javaScript", "html5", "ccs3"]
    },
    {
      name: "Mobile Flashcards",
      img: "img/flashcards/1.png",
      github: "https://github.com/stevenhuynh17/udacity_flashCards",
      description: [
        "Front-end mobile project built with React Native and Redux.",
        "Users get a daily notifcation to study the created decks that will provide a grade at the end.",
        "Users can perform CRUD functions through AsyncStorage to further customize each deck and subject."
      ],
      badges: ["react-native", "redux", "android", "ios", "javaScript", "html5", "ccs3"]
    },
    {
      name: "Would You Rather?",
      img: "img/choiceGame/1.png",
      github: "https://github.com/stevenhuynh17/udacity_reactChoiceGame",
      description: [
        "Front-end project built with React, Redux and associated libraries.",
        "Centralized state management through Redux and navigation between pages with react-router.",
        "Users can login to participate in the polls and perform CRUD functions."
      ],
      badges: ["react", "redux", "javaScript", "html5", "ccs3"]
    },
    {
      name: "Geostashing",
      img: "img/geoStashing.jpeg",
      github: "https://github.com/stevenhuynh17/geostashing",
      description: [
        "Full-stack team project utilizing React, Node.js/Express, and Postgres SQL.",
        "Users can search for merchandise, negotiate a price with the seller, then process the transaction online where the item(s) can be picked up at a designated and obscure location."
      ],
      badges: ["react", "node-js", "express", "postgres-sql", "javaScript", "html5", "ccs3"]
    },
  ]
}
