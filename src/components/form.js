import React, { useState } from 'react';

const Form = () => {

  const [ guess, setGuess ] = useState('')

  const handleChange = (e) => {
    setGuess(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <label className="label">
        <input type="number" className="guessField" value={guess} onChange={handleChange} placeholder="Please enter a number" />
      </label>
      <button type="submit" className="guessSubmit button" id="submitguess">Submit</button>
    </form>
  );
}

export default Form