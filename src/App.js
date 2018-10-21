import React, { Component } from 'react';

import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'

import './css/grayscale.css'

class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Navigation />
        <Header />
        <About />
        <ProjectList />
        <Contact />
      </div>
    );
  }
}

export default App;
