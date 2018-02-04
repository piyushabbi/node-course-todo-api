const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

// Express App
const app = express();

// Setup middleware
app.use(bodyParser.json());

// Setup post route
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })
});

// Listen app on port
app.listen(3000, () => {
  console.log('Started on port 3000');
})
