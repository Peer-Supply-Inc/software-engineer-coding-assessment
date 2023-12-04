// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let todos = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Finish project', completed: false },
  { id: 3, text: 'Exercise', completed: true },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/addTodo', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.send('Todo added successfully');
});

app.patch('/toggleTodo/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find((t) => t.id === id);
  todo.completed = !todo.completed;
  res.send('Todo updated successfully');
});

module.exports = app;