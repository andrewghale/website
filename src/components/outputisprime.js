import React, { useState, useEffect } from 'react';
import { handleIsPrime } from '../utils';

const OutputIsPrime = ({ text, name, guess }) => {

	const [ methodGuess, setMethodGuess ] = useState('')

	useEffect(() => {
		setMethodGuess(guess)
	}, [guess])

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output output-small">
				{handleIsPrime(methodGuess)}
			</p>
		</div>
	)
}

export default OutputIsPrime;
