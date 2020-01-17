import React from 'react';

const OutputPairs = (props) => {
    return (
        <div>
            <div className="output-label">{props.text}</div>
            <p id={`output-${props.name}`} className={`output ${props.name}`}>
                <li>Enter a number above!</li>
            </p>
        </div>
    )
}

export default OutputPairs