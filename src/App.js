import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';
import List from './components/list/List';

class App extends Component {
  constructor(props){
    super(props);
    this.names = props.names;
    this.selected = props.selected;
  }
  render() {
    return (
    <div style={{border: "solid 1px gray", padding: "5px"}}>
      
        <h3>Props</h3>
        <h3>State</h3>
        <List names={this.names} selected={this.selected}/>
        
      </div>
    );
  }
}

export default App;
