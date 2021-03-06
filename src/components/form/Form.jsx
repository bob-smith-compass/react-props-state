import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lasttName: "",
            password: "",
            email: "",
            city: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    handleSubmit() {
        console.log(`Submitting ${123}`);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {

        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}> */}
                {this.state.firstName}
                {this.state.lasttName}
                {this.state.password}
                {this.state.email}
                {this.state.city}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {/* defaultValue={'Initial Value'} */}
                        <input value={this.state.firstName} name="firstName" onChange={this.onFieldChange} type="text" />
                    </div>
                    <div className="form-group">
                        <textarea name="" id="" cols="30" rows="10" defaultValue={"Default value"}>
                            {/* Not like HTML */}
                        </textarea>
                    </div>
                    <div className="form-group">
                        <select name="" id="" value={'Two'} onChange={this.onFieldChange}>
                            <option value="One">First</option>
                            {/* HTML */}
                            {/* <option value="Two" selected>Second</option> */}
                            <option value="Two">Second</option>
                            <option value="Three">Third</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={this.state.lasttName} name="lasttName" onChange={this.onFieldChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.email} name="password" onChange={this.onFieldChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input value={this.state.city} name="email" onChange={this.onFieldChange} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}
