import React, { Component } from 'react';

import Navigation from './components/Navigation'
import Header from './components/Header'

import './css/grayscale.css'

class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Navigation />
        <Header />
      </div>
    );
  }
}

export default App;
