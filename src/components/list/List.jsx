import React from 'react';
import ListElement from '../list-element/ListElement';
import SimpleComponent from '../simple/SimpleComponent';

export default function List(props) {
  return (
    <div style={{border: "solid 1px green", padding: "5px"}}>
      <h3>List <SimpleComponent name="Required" /></h3>
      <h3>List <SimpleComponent name={2} /></h3>
      <SimpleComponent name="David" title="FE Developer" />
      <h4>{props.selected? "Selected":"Nothing selected"}</h4>
      {props.names.map((e, i) => {
          return <div key={i}>
              {i}. <ListElement name={e} />
          </div>
      })}
    </div>
  )
}
