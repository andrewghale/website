import React from 'react';
import styled from 'styled-components'

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

const ButtonReset = (props) => {
    return (
        <div>
            <Button onClick={props.buttonFunction}>
                Reset
            </Button>
        </div>
    )
}

export default ButtonReset