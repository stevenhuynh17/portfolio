import React, { Component } from 'react';

import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './css/grayscale.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.about = React.createRef()
    this.header = React.createRef()
    this.projects = React.createRef()
    this.contact = React.createRef()
  }

  scrollToMyRef = (event, section) => {
    event.preventDefault()
    if(section.current.id === "projects") {
      window.scrollTo({
        top: section.current.offsetTop,
        behavior: "smooth"
      })
    } else {
      window.scrollTo({
        top: section.current.offsetTop,
        behavior: "smooth"
      })
    }

  }

  render() {
    const { about, header, projects, contact } = this
    const sections = {
      about: about,
      header: header,
      projects: projects,
      contact: contact
    }
    return (
      <div id="page-top">
        <Navigation scroll={this.scrollToMyRef} sections={sections}/>
        <Header refProp={header} scroll={this.scrollToMyRef} section={about}/>
        <About refProp={about} scroll={this.scrollToMyRef} section={projects}/>
        <ProjectList refProp={projects}/>
        <Contact refProp={contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
