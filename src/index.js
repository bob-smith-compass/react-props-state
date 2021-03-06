import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';
import AddAuther from './components/add-author/AddAuther';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';

let model = {
    running: false,
    time: 0
}
let intents = {
    TICK: 'TICK',
    START: 'START',
    STOP: 'STOP',
    RESET: 'RESET',
}
const update = (model, intent) => {
    const updates = {
        'TICK': (model) => {
            return Object.assign(model, { time: model.time + 1 });
        }
    }
    return updates[intent](model);
}
const view = (model) => {
    let minutes = Math.floor(model.time / 60);
    let seconds = model.time - (minutes * 60);
    return (
        <div>{minutes}:{seconds}</div>
    )
};
/**
 * uncomment for simple Redux
const render = () => {
    ReactDOM.render(view(model), document.getElementById('root'));
} ;
render(); 
setInterval(()=> {
    model = update(model, 'TICK');
    render();
}, 1000)
 */

/**
 * Redux
 */
// let container = Redux.createStore()
function reducer(state, action) {

}
let store = Redux.createStore(reducer);
function ReduxApp() {
    return <ReactRedux.Provider store={store} >
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={Navigator} />
                <Route path="/add" component={AddAuthWrapper} />
            </React.Fragment>
        </BrowserRouter>
    </ReactRedux.Provider>
}


const authors = [
    {
        name: 'John',
        imageUrl: 'http://placeimg.com/640/480/animals',
        imageSource: 'http://placeimg.com',
        books: [
            { title: 'Title 1' },
            { title: 'Title 2' },
            { title: 'Title 3' }
        ]
    },
    {
        name: 'Bob',
        imageUrl: 'http://placeimg.com/640/480/animals',
        imageSource: 'http://placeimg.com',
        books: [
            { title: 'Title A' },
            { title: 'Title B' },
            { title: 'Title C' }
        ]
    },
    {
        name: 'Pete',
        imageUrl: 'http://placeimg.com/640/480/animals',
        imageSource: 'http://placeimg.com',
        books: [
            { title: 'Title X' },
            { title: 'Title Y' },
            { title: 'Title Z' }
        ]
    }
];
/**
 * utility functions
 */
let getTurnData = function (authors) {
    let allBooks = authors.reduce((acc, cur, i) => {
        // console.log(acc, cur);
        return acc.concat(cur.books);
    }, []);
    // return mixThem;
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);
    return {
        books: fourRandomBooks,
        author: authors.find((author) => {
            // console.log(author);
            let result = author.books.some((title) => {
                // console.log(title);
                return (title === answer);
            });
            return result;
        })
    }
}
// console.log(getTurnData(authors).books);
console.log(getTurnData(authors).author);
/**
 * STATE OF APPLICATION
 */
const state = {
    names: ["David", "John", "Bob"],
    selected: false,
    /**
     * quiz state
     */
    authors: authors,
    // authors: ["Sean", "Abel", "Jacob"],
    // author: authors[0],
    // books: authors[0].books,
    turnData: getTurnData(authors)
};

function Navigator() {
    return (
        <App {...state} />
    )
};
/**
 * 
function mapStateToProps(state) {
    return {
        names: state.names,
        selected: state.selected,
        authors: state.authors,
        turnData: state.turnData
    }

}
function mapDispatchToProps() {

}
const AddAuthWrapper = connect(mapStateToProps, mapDispatchToProps)(
    <AddAuther onAddAuthor={console.log} />
)
 */

// function AddAuthWrapper = withRouter({history}){
function AddAuthWrapper(){
    return <AddAuther onAddAuthor={console.log} />
}


// const AddAuthWrapper = withRouter(({history}) {
//     <AddAuther onAddAuthor={(author) => {
//         console.log(author)
//         authors.push(author);
//         history.push('/');
//     }}/>

// })

/**
 * MVI
 * State
 * Redux
 */
// ReactDOM.render(view(model), document.getElementById('root'));

// ReactDOM.render(<App names={state.names} selected={state.selected}/>, document.getElementById('root'));
/**
 * 
 */
ReactDOM.render(<BrowserRouter>
    <React.Fragment>
        <Route exact path="/" component={Navigator} />
        <Route path="/add" component={AddAuthWrapper} />
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
