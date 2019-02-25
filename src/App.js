import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './css/bootstrap.min.css';
import List from './components/list/List';
import ReactLifecycle from './components/lifecycle/ReactLifecycle';
import Hero from './components/quiz/hero/Hero'
import Turn from './components/quiz/turn/Turn'
import Continue from './components/quiz/continue/Continue'
import Footer from './components/quiz/footer/Footer';
import Reloader from './components/quiz/reloader/Reloader';
import Form from './components/form/Form';
import FormSubmit from './components/form-submit/FormSubmit';
import QuestionList from './components/question-list/QuestionList';

class App extends Component {
  constructor(props) {
    super(props);
    this.names = props.names;
    this.selected = props.selected;
    this.authors = props.authors;
    // this.books = props.turnData.books;
    this.author = props.turnData.author;
    this.books = props.turnData.books;
    this.highlight = props.highlight;
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
        {/* {this.authors.map((e, i) => {return <div key={i}>{e.name}</div>  })} */}
          {/* <Hero /> */}
          {/* <Turn authors={this.authors} books={this.books} author={this.author} highlight={this.highlight}/> */}
          {/* <Continue /> */}
          {/* <p><Link className="btn btn-danger" to="/add">Add author</Link></p> */}
          {/* <Reloader /> */}
          {/* <Form /> */}
          <QuestionList />
        </div>
          <Footer />

      </div>
    );
  }
}

export default App;
