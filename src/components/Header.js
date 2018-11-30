import React, { Component } from 'react'
import { data } from '../utils/data'

class Header extends Component {
  render() {
    const { name, content, quote, button } = data.header
    const { refProp, scroll, section } = this.props

    return(
      <header className="masthead" ref={refProp}>
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
            <button onClick={(event) => scroll(event, section)} className="btn btn-primary">{button}</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
