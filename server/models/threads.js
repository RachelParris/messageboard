const mongoose = require('mongoose');

const thread = new mongoose.Schema({
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
  },
  updated: {
    type: Boolean,
    default: false
  },
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comment' 
    }]
});

const Thread = mongoose.model('Thread', thread);

module.exports = Thread;
