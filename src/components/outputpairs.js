import React, { useState, useEffect } from 'react';
import { handleMakeDivisorArrayForPairs } from '../utils';
const OutputPairs = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
		setMethodGuess(guess)
	}, [guess])

	let output = [];

	const handleMakeDivisorPairs = (total) => {
		const { length } = total;
		for (let i = 0; i <= ((length / 2) - 1); i++) {
				let lastItem = total[(length) - 1 - [i]];
				output.push([`${total[i]} and ${lastItem}`]);
		};
		if (length % 2 !== 0) {
				const squareRoot = Math.sqrt(total[length - 1]);
				output.push([`${squareRoot} and ${squareRoot}`]);
		}
		return output.join("");
	}

	handleMakeDivisorPairs(handleMakeDivisorArrayForPairs(methodGuess));

	return (
		<div>
			<div className="output-label">{text}</div>
			<ul id={`output-${name}`} className="pairs-list output">
				{output.map(item => <li key={item.toString()} className="output-card">{item}</li>)}
			</ul>
		</div>
	)
}

export default OutputPairs;
