import React, { Component } from 'react';
import './turn.css';
import Book from '../book/Book';

export default function Turn(props) {
  // constructor({authors, books}) {
  // render() {
  return (
    <div className="row turn" style={{
      border: "solid 1px gray", padding: "5px",
      backgroundColor: "lightgreen"
    }}>
      <div className="col-4 offset-1" style={{ border: "dotted 1px red" }}>
        {/* {props.authors.map((e, i) => <p key={i}>{e.name}</p>)} */}
        {/* {props.turnData.author} */}
        {/* bug */}
        <img src="http://placeimg.com/640/480/animals" alt="Animal" />

      </div>
      <div className="col-6 offset-1" style={{ border: "dotted 1px red" }} >
        {/* {props.authors.map((e, i) => <p key={i}>{e.name}</p>)} */}
        {props.books.map((e, i) => <Book {...e} key={i}></Book>)}

      </div>
      Author: {props.author.name}
    </div>
  )

  // }
}
