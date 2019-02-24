import React from 'react';
import ListElement from '../list-element/ListElement';
import SimpleComponent from '../simple/SimpleComponent';
import PassValueToParent from '../pass-value-back/PassValueToParent';
import ConditionalDisplay from '../hide-show-children/ConditionalDisplay';

export default function List(props) {
  let passedValues = {
    name: "John",
    title: "Solution Architect",

  }
  let getChildValue = function(fromChild) {
    alert(`Parent: child passed ${fromChild}`)
  }
  return (
    <div style={{border: "solid 1px green", padding: "5px"}}>
      <h3>Show hide children</h3>
      <ConditionalDisplay isVisible={true}>
        <SimpleComponent {...passedValues} />
      </ConditionalDisplay>
      <ConditionalDisplay isVisible={false}>
        <SimpleComponent {...passedValues} />
      </ConditionalDisplay>
      <h3>Get Child Value:</h3>
      <PassValueToParent parentSupplies={getChildValue} />
      <h3>List <SimpleComponent name="Required" /></h3>
      <SimpleComponent name="David" title="FE Developer" />
      <SimpleComponent {...passedValues} />
      <h4>{props.selected? "Selected":"Nothing selected"}</h4>
      {props.names.map((e, i) => {
          return <div key={i}>
              {i}. <ListElement name={e} />
          </div>
      })}
    </div>
  )
}
