const mongoose = require('mongoose');

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

module.exports = {Todo};
