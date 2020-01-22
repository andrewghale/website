import React, { useState, useEffect } from 'react';

const OutputSqrt = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
    setMethodGuess(guess)
  }, [guess])

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output output-small">
				{Math.pow(methodGuess, 2)}
			</p>
		</div>
	)
}

export default OutputSqrt;
