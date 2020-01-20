import React, { useState, useEffect } from 'react';

const OutputSum = ({ text, name, guess }) => {
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
    console.log(total);
	}

  // const handleReducedOutput = (total) => {
  //   let reducedOutput = (total.reduce((acc, curr) => acc + curr), 0);
  //   return reducedOutput;
  // }

	return (
		<div>
			<div className="output-label">{text}</div>
			<p id={`output-${name}`} className="output">
				{handleMakeDivisorArray(methodGuess)}
			</p>
		</div>
	)
}

export default OutputSum;
