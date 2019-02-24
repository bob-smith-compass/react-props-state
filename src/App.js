import React, { Component } from 'react';
import './App.css';
import List from './components/list/List';

class App extends Component {
  render() {
    return (
    <div style={{border: "solid 1px gray", padding: "5px"}}>
      
        <h3>Props</h3>
        <h3>State</h3>
        <List />
        
      </div>
    );
  }
}

export default App;
