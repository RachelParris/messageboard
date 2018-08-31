const mongoose = require('mongoose');

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  profileName: String,
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bio: String,
  threads: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread'
  }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const User = mongoose.model('User', user);

module.exports = User;
