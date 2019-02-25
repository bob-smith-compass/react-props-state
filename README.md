This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# State

# Props

# Git
`git config credential.helper store`

# react-redux

`yarn add redux react-redux`
`import * as Redux from 'redux';`
`import * as ReactRedux from 'react-redux';`


## connect
    * mapStateToProps
    * mapDispatchToProps

# Redux

## Without Redux ( move data all the way up and down a component )
Can re-use a component everywhere whithout any changes, with Redux you also have to move the State setup


In MVI Application `state container` = `Store` in Redux

## getState()

## dispatch()

## subscribe()

# State - MVI - Redux
```
ReactDOM.render(view(model), document.getElementById('root'));
```
## dispatch action ( intent )

```model = update(model, 'TICK');
```

Your own render() function

```YOUR OWN render()
const render = () => {
```


# Ref
`React.createRef()`

# Routing
`yarn add react-router-dom`
## BrowserRouter
## Router
## Link
```<Route exact ...>
<Route path="/single/:id" component={Single}>
function Single({match}) {
    return <div>{match.param.di}</div>
}
```

# JSX
{ any valid JS expression! Not like Angular which has its own temlating syntax}

# Form Submition
```
FORM VALUES SUBMITTED:
function AddAuthWrapper(){
    return <AddAuther onAddAuthor={console.log}/>
```

## withRouter
`const AddAuthWrapper = withRouter({history}){`

withRouter allows users to values such as history

# Form validation
`react-jsonschema-form`
[https://mozilla-services.github.io/react-jsonschema-form/](https://mozilla-services.github.io/react-jsonschema-form/)
Disable HTML 5 Validation
noHTML5Validate

# PropTypes

```  // An object taking on a particular shape
```  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

```
# External libraries

`yarn add underscore`

* shuffle
* random
* and so on

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
