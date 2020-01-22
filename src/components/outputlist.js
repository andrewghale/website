import React, { useState, useEffect } from 'react';
import { handleMakeDivisorArray } from '../utils';

const OutputList = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
		setMethodGuess(guess)
	}, [guess])

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output">
				{handleMakeDivisorArray(methodGuess)}
			</p>
		</div>
	)
}

export default OutputList;
