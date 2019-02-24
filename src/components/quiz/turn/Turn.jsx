import React, { Component } from 'react';
import './turn.css'

export default class Turn extends Component {
  render() {
    return (
      <div className="row turn" style={{border: "solid 1px gray", padding: "5px",
      backgroundColor: "lightgreen", padding: "5px"
    }}>
    <div className="col-4 offset-1" style={{border: "solid 1px red"}}>
    x

    </div>
    <div className="col-6 offset-1" style={{border: "solid 1px red"}}>
    y

    </div>
x
        
      </div>
    )
  }
}
