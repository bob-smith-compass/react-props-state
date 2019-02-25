import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const authors = [
    {
        name: 'John',
        imageUrl: 'http://placeimg.com/640/480/animals',
        imageSource: 'http://placeimg.com',
        books: ['A', 'B', ['C']],
    }
];
const state = {
    names: ["David", "John", "Bob"],
    selected: false,
    /**
     * quiz state
     */
    authors: authors,
    // authors: ["Sean", "Abel", "Jacob"],
    author: authors[0],
    books: authors[0].books,
};

// ReactDOM.render(<App names={state.names} selected={state.selected}/>, document.getElementById('root'));
ReactDOM.render(<App {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
