const User = require('./user');
const Thread = require('./threads');
const Comment = require('./thread-comments');

db = { User, Thread, Comment }

module.exports = db;