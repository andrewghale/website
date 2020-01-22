import React from 'react';

const Form = ({ guess, submit, change }) => (
    <form className="main-form" onSubmit={submit}>
      <span
        role="img"
        aria-label="backhand index pointing right"
        className="point-emoji point-right"
        >
          👉
        </span>
      <label className="label">
        <input
          type="number"
          className="guessField"
          value={guess}
          onChange={change}
          min="0"
          // placeholder="Please enter a number"
        />
      </label>
      <span
        role="img"
        aria-label="backhand index pointing right"
        className="point-emoji point-left"
        >
          👈
        </span>
      {/* <button
        type="submit"
        className="guessSubmit button"
        id="submitguess"
        >
        Submit
      </button> */}
    </form>
);

export default Form;
