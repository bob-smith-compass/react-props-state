import React from 'react';
import './list-element.css';

export default function ListElement(props) {
    let handleClick = function() {
        alert('Clicked');
    }
  return (
    <div style={{border: "solid 1px red", padding: "5px"}}>
    
      <h3>List Element</h3>
      <h3 onClick={handleClick} className="clickable">{props.name}</h3>
    </div>
  )
}
