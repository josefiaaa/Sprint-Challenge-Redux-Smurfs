import React, { Component } from 'react';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <SmurfForm />
      </div>
    );
  }
}

export default App;
