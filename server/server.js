const mongoose = require('mongoose');

// Use Native promise
mongoose.Promise = global.Promise;

// Connect to DB
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Create a Todo model
const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,  // Unix Time Stamp
    default: null
  }
});

// Create a User model
const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// Creating a Todo
// const newTodo = new Todo({
//   text: 'Eat Lunch'
// });

// Adding to DB
// newTodo.save()
//   .then((doc) => {
//     console.log('Added to DB', JSON.stringify(doc, undefined, 2));
//   }, (err) => {
//     console.log('Unable to save Todo.');
//   });

// Creating a new Todo
const otherTodo = new Todo({
  text: 'Eat Pizza'
});

// Creating a new User
const user = new User({
  email: 'abc@abc.com'
});

// Adding the newTodo to DB
otherTodo.save()
  .then(doc => {
    console.log('Added to DB', JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log('Unable to save todo.');
  });

// Adding user to DB
user.save()
  .then(doc => {
    console.log('Added to DB', JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log('Unable to save todo.');
  });
