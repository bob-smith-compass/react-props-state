import React from 'react';
import './book.css';

export default function Book(props) {
  return (
    <div className="book">
      <div>{props.title}</div>
    </div>
  )
}
