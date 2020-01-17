import React from 'react';

const Output = (props) => {
    return (
        <div>
            <div className="output-label">{props.text}</div>
            <p id={`output-${props.name}`} className="output">
                Enter a number above!
            </p>
        </div>
    )
}

export default Output