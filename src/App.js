import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';
import List from './components/list/List';
import ReactLifecycle from './components/lifecycle/ReactLifecycle';
import Hero from './components/quiz/hero/Hero'
import Turn from './components/quiz/turn/Turn'
import Continue from './components/quiz/continue/Continue'
import Footer from './components/quiz/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.names = props.names;
    this.selected = props.selected;
  }
  render() {
    return (
      <div className="container" style={{ border: "solid 1px gray", padding: "5px" }}>

        <h3>Props</h3>
        <h3>State</h3>
        {/* uncomment to see entire application */}
        {/* <ReactLifecycle /> */}
        {/* <List names={this.names} selected={this.selected}/> */}
        <div className="jumbotron">
          <Hero />
          <Turn authors={['A', 'B', 'C']} books={[1,2,3]}/>
        </div>
          <Continue />
          <Footer />

      </div>
    );
  }
}

export default App;
