const mongoose = require('mongoose');
 
const comment = new mongoose.Schema({
  author: {
    id: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    username: { 
      type: String,
      required: true,
      }
  },
  title: { 
    type: String,
    required: true,
    },
  body: { 
    type: String,
    required: true,
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