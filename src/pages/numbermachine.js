import React, { Fragment } from 'react';
import title from '../assets/img/numbermachine/title.svg';
import githublogo from '../assets/img/numbermachine/github.svg';
// import coffeeRing from '../assets/img/numbermachine/coffee-ring.png';

const NumberMachine = () => {
    return(
        <Fragment>
            <div className="page-container">
            {/* <div class="coffee-ring-bottom-right">
                <img src={coffeeRing} alt="coffee ring" />
            </div>
            <div class="coffee-ring-bottom-left">
                <img src={coffeeRing} alt="coffee ring" />
            </div> */}
                <div className="container">
                    <img className="title" src={title} alt="Number Machine" />
                    <p className="created-by">Created by Andrew Hale</p>
                    <div id="github" className="github">
                        <a className="github-link" href="https://github.com/andrewghale" target="_blank" rel="noopener noreferrer">
                            <img src={githublogo} alt="github logo" />
                            <p>/andrewghale</p>
                        </a>
                    </div>
                    <form className="main-form">
                        <label className="label" htmlFor="guessField">
                            <input type="number" id="guessField" className="guessField" />
                            <input type="submit" value="Submit"
                            className="guessSubmit button" id="submitguess" />
                        </label>
                    </form>
                    <div className="warning">Whole numbers between 1 and 999999999 only!</div>
                    <div className="output-label">Is Prime?</div>
                    <p id="output-prime" className="output">
                        Enter a number above!
                    </p>
                    <div className="output-label">List of Divisors:</div>
                    <p id="output-list" className="output">
                        Enter a number above!
                    </p>
                    <div className="output-label">Pairs of Divisors:</div>
                    <ul id="output-pairs-list" className="pairs-list output">
                        <li>Enter a number above!</li>
                    </ul>
                    <div className="output-label">Sum of Divisors:</div>
                    <p id="output-reduced" className="output">
                        Enter a number above!
                    </p>
                    <div className="output-label">Square Root:</div>
                    <p id="output-sqrt" className="output">
                        Enter a number above!
                    </p>
                    <div className="output-label">Squared:</div>
                    <p id="output-squared" className="output">
                        Enter a number above!
                    </p>
                    <div className="output-label">Cube Root:</div>
                    <p id="output-cbrt" className="output">
                        Enter a number above!
                    </p>
                    <div className="output-label">Cubed:</div>
                    <p id="output-cubed" className="output">
                        Enter a number above!
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default NumberMachine