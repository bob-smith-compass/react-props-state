import React from 'react';

export default function ListElement(props) {
  return (
    <div style={{border: "solid 1px red", padding: "5px"}}>
    
      <h3>List Element</h3>
      <h3>{props.name}</h3>
    </div>
  )
}
