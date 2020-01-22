import React, { useState, useEffect } from 'react';

const OutputCubed = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
    setMethodGuess(guess)
  }, [guess])

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output output-small">
				{Math.pow(methodGuess, 3)}
			</p>
		</div>
	)
}

export default OutputCubed;
