import React from 'react'

export default function Form() {
    let values = 124
    let handleSubmit = function () {
        console.log(`Submitting ${123}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" defaultValue={'Initial Value'} />
                </div>
                <div className="form-group">

                    <textarea name="" id="" cols="30" rows="10" defaultValue={"Default value"}>
                        {/* Not like HTML */}
                    </textarea>
                </div>
                <div className="form-group">

                    <select name="" id="">
                        <option value="One">First</option>
                        <option value="Two">Second</option>
                    </select>
                </div>
                <div className="form-group">

                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
