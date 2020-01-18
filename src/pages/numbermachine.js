import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Form from '../components/form'
import Warning from '../components/warning'
import Output from '../components/output'
import OutputPairs from '../components/outputPairs'
import "prismjs";
import title from '../assets/img/numbermachine/title.svg';
import githublogo from '../assets/img/numbermachine/github.svg';
import coffeeRing from '../assets/img/numbermachine/coffee-ring.png';

const NumberMachine = () => {

    // const [ guess, setGuess ] = useState('');
    // const input = parseInt(guess.value);
    // const getOutput = document.getElementById.bind(document);
    // getOutput("output-sqrt").innerHTML = Math.sqrt(input);;
    // console.log(guess);

    const handleSquare = (e) => {
        console.log(e.target.value);
    }

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
                    <Form />
                    <Warning />
                    {/* <div className="warning">Whole numbers between 1 and 999999999 only!</div> */}
                    <Output name="prime" text="Is Prime?" />
                    <Output name="list" text="List of Divisors:" />
                    <OutputPairs name="pairs-list" text="Pairs of Divisors:"/>
                    <Output name="reduced" text="Sum of Divisors:" />
                    <Output name="sqrt" text="Square Root:" />
                    <Output name="squared" text="Squared:" />
                    <Output name="cbrt" text="Cube Root:" />
                    <Output name="cubed" text="Cubed:" />
                </div>
                <div className="container">
                <div className="explain-container">
                    <h3 className="explain-title">How (Some Of) It Works</h3>
                    <h4 className="explain-subtitle">Creating the array</h4>
                    <p>This function checks whether the <code className="language-javascript">input</code> value can be divided by the current iteration <code className="language-javascript">[i]</code> without leaving
                        a remainder - if it can, then the number <code className="language-javascript">[i]</code> is added on to the end of an array named <code className="language-javascript">total</code>.</p>
                    <div className="code-container">
                        <pre>
                            <code className="language-javascript">
                                {`
    const divCalculator = (input) => {
    let total = [];
    for (let i = 1; i <= input; i++) {
        if (input % i === 0) {
            total.push(i);
        };
    };
    return total;
    }
    // if inputValue is 12, total = [1, 2, 3, 4, 6, 12]
    // if inputValue is 319, total = [1, 11, 29, 319]
                                `}
                            </code>
                        </pre>
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
                        <pre>
                            <code className="language-javascript">
                                {`
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
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            </div>
            <Footer pageName="number-machine"/>
        </Fragment>
    )
}

export default NumberMachine