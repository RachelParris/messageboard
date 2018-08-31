const express = require('express');
const auth = require('./auth-routes');
const users = require('./user-routes');
const threads = require('./thread-routes');
const comments = require('./comment-routes');
const app = express();

const routes = { auth, users, threads, comments }



module.exports = routes;