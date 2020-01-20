import React, { useState, useEffect } from 'react';

const OutputIsPrime = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
		setMethodGuess(guess)
	}, [guess])

	const handleIsPrime = (methodGuess) => {
		if ( methodGuess === 1 ) {
				return ('false');
		} else if ( methodGuess === 2 ) {
				return ('true');
		} else {
				for ( let i = 2; i < methodGuess; i++ ) {
						if ( methodGuess % i === 0 ) {
								return ('false');
						}
				}
			return ('true');
		}
	}

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output">
				{handleIsPrime(methodGuess)}
			</p>
		</div>
	)
}

export default OutputIsPrime;
