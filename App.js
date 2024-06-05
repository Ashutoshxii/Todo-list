import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTask] = useState([]);

  function Handletasks() {
    const newTasks = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTask([...tasks, newTasks]);
    setInput('');
  }

  function Handledelete(id) {
    setTask(tasks.filter(item => item.id !== id));
  }

  function Handletoggle(id) {
    setTask(tasks.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  }
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      Handletasks();
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter The tasks"
        onKeyPress={handleKeyPress}
      />
      <button onClick={Handletasks}>Add</button>
      <ul>
        {tasks.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {item.text}
            <div>
              <button className="delete" onClick={() => Handledelete(item.id)}>Delete</button>
              <button className="toggle" onClick={() => Handletoggle(item.id)}>
                {item.completed ? 'Undo' : 'Done'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
