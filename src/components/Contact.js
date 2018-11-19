import React, { Component } from 'react'
import { data } from '../utils/data'

class Contact extends Component {
  state = {
    copied: false
  }

  copyToClipboard = (event) => {
    const data = event.target.value

    navigator.clipboard.writeText(data)
    .then(() => {
      console.log('copied!')
      this.setState({
        copied: true
      })
    })
  }

  render() {
    const { copied } = this.state
    const { linkedin, github, email } = data.contact
    const { refProp } = this.props

    return(
      <section className="contact-section bg-black" id="contact" ref={refProp}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4"/>
                  <div className="small text-black-50">
                    <button type="button" className="btn-email" value={email} onClick={this.copyToClipboard}>
                      {copied ? "Copied to clipboard!" : email}
                    </button>
                  </div>
                  <div className="social d-flex justify-content-center">
                    <a href={github} target="_blank" className="mx-2">
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href={linkedin} target="_blank" className="mx-2">
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
