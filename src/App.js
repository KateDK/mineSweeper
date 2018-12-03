import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoComponent from './DemoComponent';
import { Game } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
