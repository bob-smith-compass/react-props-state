import React, { Component } from 'react'

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
        Name: <input type="text" value={this.state.name}/>
        Title: <input type="text" value={this.state.title}/>
        <button onClick={() => this.setState({title: 'New title'})}>Update</button>
      </div>
    )
  }
}
