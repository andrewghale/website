import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Form from '../components/form';
import Warning from '../components/warning';
// import Output from '../components/output';
import OutputIsPrime from '../components/outputisprime';
import OutputList from '../components/outputlist';
import OutputPairs from '../components/outputpairs';
// import OutputSum from '../components/outputsum';
import OutputSqrt from '../components/outputsqrt';
import OutputSquared from '../components/outputsquared';
import OutputCbrt from '../components/outputcbrt';
import OutputCubed from '../components/outputcubed';
import title from '../assets/img/numbermachine/title.svg';
import githublogo from '../assets/img/numbermachine/github.svg';
import coffeeRing from '../assets/img/numbermachine/coffee-ring.png';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Utils
// import isPrimeNumber from '../utils/prime-number';

const NumberMachine = () => {
    const [ guess, setGuess ] = useState('');

    useEffect(() => {
        // console.log('LOADED')
    }, [])

    const handleChange = (e) => {
        if (e.target.value <= 999999) {
            setGuess(e.target.value);
            // console.log(e.target.value);
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // setGuess(guess);
    //     // console.log(guess);
    // }

    const codeStringArray = `
    const divCalculator = (input) => {
        let total = [];
        for (let i = 1; i <= input; i++) {
            if (input % i === 0) {
                total.push(i);
            };
        };
        return total.join(", ");
    }
    // if inputValue is 12, total = [1, 2, 3, 4, 6, 12]
    // if inputValue is 319, total = [1, 11, 29, 319]
    `;

    const codeStringPrime = `
    const testPrime = (input) => {
        if ( input === 1 ) {
            return ('false');
        } else if ( input === 2 ) {
            return ('true');
        } else {
            for ( let i = 2; i < input; i++ ) {
                if ( input % i === 0 ) {
                    return ('false');
                }
            }
        return ('true');
    }
    `;

    return (
        <Fragment>
            <Header pageName="number-machine"/>
            <div className="page-container">
            <div className="coffee-ring coffee-ring-bottom-right">
                <img src={coffeeRing} alt="coffee ring" />
            </div>
            <div className="coffee-ring coffee-ring-bottom-left">
                <img src={coffeeRing} alt="coffee ring" />
            </div>
                <div className="container">
                    <img className="title" src={title} alt="Number Machine" />
                    <p className="created-by">Created by Andrew Hale</p>
                    <div id="github" className="github">
                        <a className="github-link" href="https://github.com/andrewghale" target="_blank" rel="noopener noreferrer">
                            <img src={githublogo} alt="github logo" />
                            <p>/andrewghale</p>
                        </a>
                    </div>
                    <p className="type-in">Type in a number!</p>
                    <Form
                        guess={guess}
                        // submit={handleSubmit}
                        change={handleChange}
                    />
                    <Warning />
                    <OutputIsPrime name="prime" text="Is Prime?" guess={guess} />
                    <OutputList name="list" text="List of Divisors:" guess={guess}/>
                    <OutputPairs name="pairs" text="Pairs of Divisors:" guess={guess} />
                    {/* <OutputSum name="reduced" text="Sum of Divisors:" /> */}
                    <OutputSqrt name="sqrt" text="Square Root:" guess={guess} />
                    <OutputSquared name="squared" text="Squared:" guess={guess} />
                    <OutputCbrt name="cbrt" text="Cube Root:" guess={guess} />
                    <OutputCubed name="cubed" text="Cubed:" guess={guess} />
                </div>
                <div className="container">
                <div className="explain-container">
                    <h3 className="explain-title">How (Some Of) It Works</h3>
                    <h4 className="explain-subtitle">Creating the array</h4>
                    <p>This function checks whether the <code className="language-javascript">input</code> value can be divided by the current iteration <code className="language-javascript">[i]</code> without leaving
                        a remainder - if it can, then the number <code className="language-javascript">[i]</code> is added on to the end of an array named <code className="language-javascript">total</code>.</p>
                    <div className="code-container">
                    <SyntaxHighlighter language="javascript" style={kimbieDark}>
                        {codeStringArray}
                    </SyntaxHighlighter>
                    </div>
                    <h4 className="explain-subtitle">Prime Numbers</h4>
                    <p>
                        This function checks to see if the <code className="language-javascript">input</code> value is a prime number.
                    </p>
                    <p>
                        Inputting 1 and 2 will simply return "False" and "True" respectively but for any number greater than 2, if it can be divided by the current iteration <code className="language-javascript">[i]</code>,
                        it won't be a prime number, so the output is false.
                    </p>
                    <div className="code-container">
                    <SyntaxHighlighter language="javascript" style={kimbieDark}>
                        {codeStringPrime}
                    </SyntaxHighlighter>
                    </div>
                </div>
            </div>
            </div>
            <Footer pageName="number-machine"/>
        </Fragment>
    )
}

export default NumberMachine