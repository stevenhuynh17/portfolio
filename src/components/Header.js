import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class Header extends Component {
  render() {
    const data = {
      name: "Steven Huynh",
      content: "I am a full-stack web developer, athlete, chef, gamer and nerd.",
      quote: {
        author: "Fred Rogers",
        content: '"There is no normal life that is free of pain. It’s the very wrestling with our problems that can be the impetus for our growth."'
      },
      button: "Find Out More"
    }
    const { name, content, quote, button } = data

    return(
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">
              {name}
            </h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              {content}
            </h2>
            <p className="text-white-50">
              <i>
                {quote.content}
              </i>
            </p>
            <p className="text-white-50 mx-auto mt-2 mb-5">
              - {quote.author}
            </p>
            <a href="#about" className="btn btn-primary js-scroll-trigger">
              {button}
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
