import React from 'react';

const Form = ({ guess, submit, change }) => (
  <div>
    <form className="main-form" onSubmit={submit}>
      <label className="label">
        <input
          type="number"
          className="guessField"
          value={guess}
          onChange={change}
          min="0"
          placeholder="Please enter a number"
        />
      </label>
      {/* <button
        type="submit"
        className="guessSubmit button"
        id="submitguess"
        >
        Submit
      </button> */}
    </form>
  </div>
);

export default Form;
