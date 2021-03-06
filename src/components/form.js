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
          onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }
          min="0"
        />
      </label>
      <span
        role="img"
        aria-label="backhand index pointing right"
        className="point-emoji point-left"
        >
          👈
        </span>
    </form>
);

export default Form;
