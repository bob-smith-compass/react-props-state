import React from 'react'

export default function ReactLifecycle() {
    return (
        <div style={{ border: "solid 1px gray", padding: "5px" }}>
            <h3>React Lifecycle</h3>
            <span className="badge badge-pill badge-primary">Constructor</span>
            <span className="badge badge-pill badge-secondary">componentWillMount</span>
            <span className="badge badge-pill badge-success">render</span>
            <span className="badge badge-pill badge-danger">componentDidMoutn</span>
            {/* <span className="badge badge-pill badge-warning">Warning</span> */}
            {/* <span className="badge badge-pill badge-info">Info</span> */}
            {/* <span className="badge badge-pill badge-light">Light</span> */}
            {/* <span className="badge badge-pill badge-dark">Dark</span> */}
            <p>Use Lifecycle methods to wrap Imeritive API, e.g. jQuery, to initialize and then remove it.</p>
        </div>
    )
}
