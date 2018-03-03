import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers.js';
import logo from './logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
          <Tickers />
      </div>
    );
  }
}

export default App;
