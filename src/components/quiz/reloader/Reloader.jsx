import React, { Component } from 'react'

export default class Reloader extends Component {
    constructor(props) {
        super(props);
        this.state = { content: "" };
        this.onChar = this.onChar.bind(this);
        this.onGoTime = this.onGoTime.bind(this);
    };
    onChar(event) {
        this.setState({
            content: event.target.value
        })
    }
    onGoTime(event) {
        if(this.state.content !== "reload") {
            event.preventDefault();
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onGoTime}>
                    <input type="text" value={this.state.congtent} onChange={this.onChar} />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}
