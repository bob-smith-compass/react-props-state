import React, { Component } from 'react'
import Question from '../question/Question';

export default class QuestionList extends Component {
  render() {
    return (
      <div>
        <h3>Questions</h3>
        <Question />
      </div>
    )
  }
}
