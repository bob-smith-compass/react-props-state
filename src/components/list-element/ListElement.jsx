import React from 'react';
import './list-element.css';
import InternalState from '../state/InternalState';

export default function ListElement(props) {
    let handleClick = function(selected) {
        console.log(selected); //Synthetic event
        return selected;
    }
  return (
    <div style={{border: "solid 1px red", padding: "5px"}}>
    
      <h3 onClick={handleClick}>List Element</h3>
      <h3 onClick={(e) => { console.log(this); return this; }} className="clickable">{props.name}</h3>
      <InternalState />
    </div>
  )
}
