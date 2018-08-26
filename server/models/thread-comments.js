const mongoose = require('mongoose');
 
const comment = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: { 
    type: String,
    required: true,
    match: /[a-zA-Z0-9]/ 
    },
  body: { 
    type: String,
    required: true,
    match: /[a-zA-Z0-9]/ 
    },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Comment = mongoose.model('Comment', comment);

module.exports = Comment;