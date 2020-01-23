import React, {Fragment, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import uuid4 from "uuid4";
import "../styles/todolist/app.scss";

const ToDonts = () => {
  const [todonts, setTodonts] = useState([
    {
      id: uuid4(),
      todonts: 'One'
    },
    {
      id: uuid4(),
      todonts: 'Two'
    },
    {
      id: uuid4(),
      todonts: 'Three'
    }
  ])

  const [todontInput, settodontInput] = useState('');

  const handleSubmit = (e) => {
    // Stop form from submitting
    e.preventDefault();
    setTodonts([
      ...todonts, {
        id: uuid4(),
        todonts: todontInput
      }
    ])
    settodontInput('');
  }

  const handleChange = (e) => {
    settodontInput(e.target.value);
    console.log(e.target.value);
  }

  const handleRemove = (id) => {
    setTodonts(todonts.filter((todonts) => todonts.id !== id));
  }

  return (
    <Fragment>
      <Header pageName="numbermachine" />
        <div className="to-do-list">
          <h1>To-Do List</h1>
          <h3>Things to do</h3>
          <p className="explanation">Click on an item to remove it</p>
          { todonts.map(({ id, todonts }) => (
            <p onClick={() => handleRemove(id)} key={id}>{todonts}</p>
          )) }
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">
                Add To-Don't:
                <input type="text" onChange={handleChange} value={todontInput} />
              </label>
              <button>Add</button>
            </form>
          </div>
        </div>
      <Footer pageName="numbermachine" />
    </Fragment>
  );
}

export default ToDonts;
