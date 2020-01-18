import React, { useState } from 'react';

const Form = () => {

  const [ guess, setGuess ] = useState('')

  const handleChange = (e) => {
    setGuess(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form guess={guess} className="main-form" onSubmit={handleSubmit}>
        <label className="label">
          <input type="number" className="guessField" value={guess} onChange={handleChange} placeholder="Please enter a number" />
        </label>
        <button type="submit" className="guessSubmit button" id="submitguess">Submit</button>
      </form>
      {/* <p>{guess}</p> */}
    </div>
  );
}

export default Form