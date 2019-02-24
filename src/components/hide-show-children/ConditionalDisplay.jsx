import React from 'react';
import PropTypes from 'prop-types';


export default function ConditionalDisplay(props) {
    let show = props.isVisible;
    return (
        <div>
            {/* <input type="checkbox" onClick={() => props.isVisible = !props.isVisible} /> */}
            {/* CANNOT DO THIS - props ARE READY ONLY */}

            <input type="checkbox" onClick={() => {show = !show; console.log(show)}} />
            {props.isVisible? props.children: null}
            {/* DEBUG */}
            {/* Show: {show} {show ? props.children : null} */}
        </div>
    )
}
ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
}