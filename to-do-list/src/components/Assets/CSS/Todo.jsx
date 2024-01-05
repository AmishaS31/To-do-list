import React, { useEffect, useState, useRef } from 'react';
import '../CSS/Todo.css';
import Todoitems from './Todoitems';

const Todo = ({ no, display, text }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState(''); // State to track input value
  const inputRef = useRef(null);
  const [count, setCount] = useState(0); // Manage count using state

  const add = () => {
    if (inputValue.trim() !== '') { // Check if input value is not empty or whitespace
      setTodos([...todos, { no: count, text: inputValue, display: '' }]);
      setInputValue(''); // Clear input value after adding
      setCount(count + 1); // Update count using setCount
    }
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const storedCount = parseInt(localStorage.getItem('todos_count'), 10);

    if (Array.isArray(storedTodos)) {
      setTodos(storedTodos);
    }
    if (!isNaN(storedCount)) {
      setCount(storedCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('todos_count', count);
  }, [todos, count]); // Add 'todos' and 'count' as dependencies here

  return (
    <div className='todo'>
      <div className="todo-header">To-do List</div>
      <div className='todo-add'>
        <input
          ref={inputRef}
          type="text"
          placeholder='Add your Task'
          className='todo-input'
          value={inputValue} // Set input value from state
          onChange={(e) => setInputValue(e.target.value)} // Update input value
        ></input>
        <div onClick={add} className={`todo-add-btn ${inputValue.trim() === '' ? 'disabled' : ''}`}>ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Todo;

