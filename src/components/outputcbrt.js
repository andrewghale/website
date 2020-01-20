import React, { useState, useEffect } from 'react';

const OutputCbrt = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
    setMethodGuess(guess)
  }, [guess])

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output">
				{Math.cbrt(methodGuess)}
			</p>
		</div>
	)
}

export default OutputCbrt;
