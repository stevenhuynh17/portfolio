import React, { Component } from 'react'
import Footer from './Footer'

class Contact extends Component {
  copyToClipboard = () => {
    
  }

  render() {
    const linkedin = "https://www.linkedin.com/in/stevenhuynh17/"
    const github = "https://github.com/stevenhuynh17"

    return(
      <section className="contact-section bg-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4"/>
                  <div className="small text-black-50">
                    <a onClick={this.copyToClipboard}>stevenhuynh17@gmail.com</a>
                  </div>
                  <div className="social d-flex justify-content-center">
                    <a href={github} target="_blank" className="mx-2">
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href={linkedin} target="_blank" className="mx-2">
                      <i class="fab fa-linkedin fa-2x"></i>
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
