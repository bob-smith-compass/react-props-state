import React, { Component } from 'react'

export default class Reloader extends Component {
    constructor(props) {
        super(props);
        this.state = { congtent: "" };
        this.onChar = this.onChar.bind(this);
        this.onGoTime = this.onGoTime.bind(this);
    }
    let onChar = function (event) {
        this.setState({
            content: event.target.value
        })
    }
    let onGoTime = function (event) {
        this.setState({
            content: event.target.value
        })
    }
render() {
    return (
        <div>
            <form onSubmit={this.onGoTime}>
            <input type="text" value={this.state.congtent} onChange={this.onChar}/>
            </form>

        </div>
    )
}
}
