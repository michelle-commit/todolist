import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function TodoList() {
    const [todo, setTodo] = useState('');
    const [doing, setDoing] = useState([]);
   const [done, setDone] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    setDoing([...doing, todo]);
    setTodo('');
  }

  const handleDelete = (index) => {
    const newDoing = [...doing];
    newDoing.splice(index, 1);
    setDoing(newDoing);
  }

   const handleCheck = (index) => {
    const currentTodo = doing[index];
    handleDelete(index);
    setDone([...done, currentTodo]);
  }
  return (
    <div className="App">
      <div className='container'>
        <form onSubmit={handleSubmit} data-testid = "input-1">
          <input 
            type="text" 
            value={todo} 
            onChange={e => setTodo(e.target.value)} onKeyDown={(e)=>{e.key === 'Enter' && handleSubmit()}}
            placeholder="Add task"
          />
        </form>
      <div className='azerty'>
        <div className='todo'>
          <h3>TODO</h3>
          <ul>
            {doing.map((todo, index) => (
              <li key={index}>
                {todo}
                <input 
                  type="checkbox" 
                  onClick={() => handleCheck(index)} 
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='done'>
          <h3>DONE</h3>
          <ul>
            {done.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TodoList;


