import React from 'react';

const Output = ({ text, name, guess, methods }) => {
	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output">
				Enter a number above!
			</p>
		</div>
	)
}

export default Output;
