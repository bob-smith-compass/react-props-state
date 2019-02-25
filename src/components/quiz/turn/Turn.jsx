import React, { Component } from 'react';
import './turn.css';
import Book from '../book/Book';

export default function Turn(props) {
  // constructor({authors, books}) {
  // render() {
    return (
      <div className="row turn" style={{border: "solid 1px gray", padding: "5px",
      backgroundColor: "lightgreen", padding: "5px"
    }}>
    <div className="col-4 offset-1" style={{border: "solid 1px red"}}>
    <img src="http://placeimg.com/640/480/animals" alt=""/>

    </div>
    <div className="col-6 offset-1" style={{border: "solid 1px red"}} >
    {props.authors.map((e, i) => <p key={i}>{e.name}</p>)}
    {props.books.map((e, i) => <Book {...e} key={i}></Book>)}

    </div>
Z
        
      </div>
    )
  
  // }
}
