import React, { Component } from 'react';
import logo from './logo.svg';

import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
