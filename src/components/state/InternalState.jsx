import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class InternalState extends Component {
    constructor(props) {
        super(props);
        /**
         * state
         */
        this.state = {
            name: 'David',
            title: 'Senior FE Developer'
        }
    }
  render() {
    return (
      <div>
      <div>
        <span>{this.state.name}</span> is a <span>{this.state.title}</span>
      </div>
        Name: <input type="text" defaultValue={this.state.name}/>
        Title: <input type="text" defaultValue={this.state.title}/>
        <button onClick={() => this.setState({title: 'New title'})}>Update</button>
      </div>
    )
  }
}
