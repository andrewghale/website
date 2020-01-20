import React from 'react';

const ButtonReset = ({ buttonFunction, count }) => (
    <button
    className={ `counter-button ${count === 0 ? "red-bg" : "white-bg"}` }
    onClick={buttonFunction}>
		Reset
	</button>
)

export default ButtonReset
