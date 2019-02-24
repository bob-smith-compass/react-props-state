import React from 'react';
import ListElement from '../list-element/ListElement';
import SimpleComponent from '../simple/SimpleComponent';

export default function List(props) {
  return (
    <div style={{border: "solid 1px green", padding: "5px"}}>
      <h3>List <SimpleComponent /></h3>
      <h4>{props.selected? "Selected":"Nothing selected"}</h4>
      {props.names.map((e, i) => {
          return <div key={i}>
              {i}. <ListElement name={e} />
          </div>
      })}
    </div>
  )
}
