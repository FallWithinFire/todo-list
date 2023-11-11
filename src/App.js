import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() !== '') {
      if (editingIndex !== null) {
        // If editing, update the existing todo
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = task;
        setTodos(updatedTodos);
        setTask('');
        setEditingIndex(null);
      } else {
        // If not editing, add a new todo
        setTodos([...todos, task]);
        setTask('');
      }
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditingIndex(index);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTodo}>{editingIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;