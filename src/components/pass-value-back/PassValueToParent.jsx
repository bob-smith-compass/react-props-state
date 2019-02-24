import React from 'react';

export default function PassValueToParent({ parentSupplies }) {

    let textInput = React.createRef();
    let sendToParent = function() {
        // console.log(textInput); // entire input object
        console.log(textInput.current.defaultValue);
        parentSupplies(textInput);
    }

    return (
        <div>
            <input type="text" ref={textInput} defaultValue="David" />
            <button onClick={sendToParent}>Pass value!</button>
        </div>
    )
}
