import React, { useState, useEffect } from 'react';

const OutputPairs = ({ text, name, guess }) => {
	const [methodGuess, setMethodGuess] = useState('')

	useEffect(() => {
		setMethodGuess(guess)
	}, [guess])

	const handleMakeDivisorArray = (methodGuess) => {
    let total = [];
    for (let i = 1; i <= methodGuess; i++) {
        if (methodGuess % i === 0) {
            total.push(i);
        };
    };
    return total;
	}

	const handleMakeDivisorPairs = (total) => {
		const { length } = total;
		let output = [];
		for (let i = 0; i <= ((length / 2) - 1); i++) {
				let lastItem = total[(length) - 1 - [i]];
				output.push([`<li>${total[i]} and ${lastItem}</li>`]);
		};
		if (length % 2 !== 0) {
				const squareRoot = Math.sqrt(total[length - 1]);
				output.push([`<li>${squareRoot} and ${squareRoot}</li>`]);
		}
		return output.join("");
	}

	return (
		<div>
			<div className="output-label">{text}</div>
			<div id={`output-${name}`} className="output">
				<ul>
					{handleMakeDivisorPairs(handleMakeDivisorArray(methodGuess))}
				</ul>
			</div>
		</div>
	)
}

export default OutputPairs;
