import React from 'react'
import ListElement from '../list-element/ListElement';

export default function List(props) {
  return (
    <div style={{border: "solid 1px green", padding: "5px"}}>
      <h3>List</h3>
      {props.names.map((e, i) => {
          return <div key={i}>
              {i}. <ListElement name={e} />
          </div>
      })}
    </div>
  )
}
