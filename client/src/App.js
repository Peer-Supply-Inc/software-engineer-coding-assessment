// TodoApp.js
import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSecondsPassed((secondsPassed) => secondsPassed + 1);
    }, 1000);
  });

  const addTodo = (text) => {
    fetch('http://localhost:3001/addTodo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, completed: false }),
    }).then(() => {
      setTodos([...todos, { text, completed: false }]);
    });
  };

  const toggleTodo = (id) => {
    fetch(`http://localhost:3001/toggleTodo/${id}`, {
      method: 'PATCH',
    }).then(() => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <p>Seconds passed since you have entered the todo app: {secondsPassed}</p>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default TodoApp;