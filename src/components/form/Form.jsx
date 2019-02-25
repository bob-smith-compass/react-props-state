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
        }
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
                        <input name="firstName" onChange={this.onFieldChange} type="text" defaultValue={'Initial Value'} />
                    </div>
                    <div className="form-group">
                        <textarea name="" id="" cols="30" rows="10" defaultValue={"Default value"}>
                            {/* Not like HTML */}
                        </textarea>
                    </div>
                    <div className="form-group">
                        <select name="" id="" value={'Two'}>
                            <option value="One">First</option>
                            {/* HTML */}
                            {/* <option value="Two" selected>Second</option> */}
                            <option value="Two" selected>Second</option>
                            <option value="Three">Third</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="lasttName" onChange={this.onFieldChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name="password" onChange={this.onFieldChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input name="email" onChange={this.onFieldChange} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}
