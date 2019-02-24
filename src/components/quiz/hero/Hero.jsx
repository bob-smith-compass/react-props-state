import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
      <div className="row" style={{border: "solid 1px gray", padding: "5px"}}>
      
        <div className="jumbotron col-10 offset-1">
          <h3>Hero</h3>
        </div>
      </div>
    )
  }
}
