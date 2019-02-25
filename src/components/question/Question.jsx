import React from 'react'

export default function Question(props) {
  return (
    <div style={{border: "solid 1px gray", padding: "5px"}}>
      <h3>Question</h3>
      {props.question.q}
    </div>
  )
}
