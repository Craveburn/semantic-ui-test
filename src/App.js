import React, { Component } from 'react'
import Grid from './Grid.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="containerBody">
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
