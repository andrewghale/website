import React, {Fragment, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import uuid4 from "uuid4";
import "../styles/todolist/app.scss";

const ToDos = () => {
  const [ todos, setTodos ] = useState([
    {
      id: uuid4(),
      todos: 'Go for a run'
    },
    {
      id: uuid4(),
      todos: 'Cook dinner'
    },
    {
      id: uuid4(),
      todos: 'Buy cat food'
    }
  ])

  const [ todoInput, settodoInput ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {
        id: uuid4(),
        todos: todoInput
      }
    ])
    settodoInput('');
  }

  const handleChange = (e) => {
    settodoInput(e.target.value);
  }

  const handleRemove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  }

  return (
    <Fragment>
      <Header pageName="to-do-list" />
        <div className="to-do-list">
          <div className="notepad">
            <h1>To-Do List</h1>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="">
                  Add Item:
                  <input type="text" onChange={handleChange} value={todoInput} />
                </label>
                <button>Add</button>
              </form>
            </div>
            <p className="explanation">Click on an item to remove it</p>
            { todos.map(({ id, todos }) => (
              <p
                className="task"
                onClick={() => handleRemove(id)}
                key={id}
              >
                {todos}
              </p>
            )) }
          </div>
        </div>
      <Footer pageName="to-do-list" />
    </Fragment>
  );
}

export default ToDos;
