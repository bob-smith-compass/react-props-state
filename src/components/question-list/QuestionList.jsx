import React, { Component } from 'react'
import Question from '../question/Question';

export default class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.quesions = [
            {q: "how?", points: 5},
            {q: "how?", points: 3},
            {q: "how?", points: 4},
            {q: "how?", points: 7},
        ]
    }
  render() {
    return (
      <div>
        <h3>Questions</h3>
        {this.quesions.map((e, i) => {
            return(
                <div key={i}>
                    <Question question={e}/>
                </div>
            )
        })}
      </div>
    )
  }
}
