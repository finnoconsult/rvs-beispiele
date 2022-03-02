const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* TODOs verwalten
  - Create:  POST
  - Read:    GET
  - Update:  PATCH
  - Delete: DELETE
 */

let todos = [
  { id: 'a', title: 'eins', isDone: false },
  { id: 'b', title: 'zwei', isDone: true },
  { id: 'c', title: 'drei', isDone: false },
];

app.get('/todos', (req, res) => {
  res.send({ success: true, data: todos });
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.send({ success: true, data: todo });
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index] = { ...todos[index], ...req.body };
  res.send({ success: true, data: todos[index] });
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  todos = todos.filter((todo) => todo.id !== id);
  res.send({ success: true });
});

app.listen(8080, () => {
  console.log('Listening on port 8080.');
});
