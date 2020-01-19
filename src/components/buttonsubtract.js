import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    height: 100px;
    width: 100px;
    font-size: 2rem;
    border: none;
    margin: 1rem;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
`;

const ButtonSubtract = ({ buttonFunction }) => (
	<Button onClick={buttonFunction}>
			-
	</Button>
)

export default ButtonSubtract
