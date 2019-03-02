import React from 'react'
import QuestionList from '../question-list/QuestionList';

export default function Layout() {
  return (
    <div className="container-fluid" style={{border: "solid 1px red;"}}>
      container-fluid 
      <QuestionList />

    </div>
  )
}
