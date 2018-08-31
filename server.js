const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const routes = require('./server/routes');
const port = 4000;
const app = express();
require('dotenv').config();


// Use body parser and cookie parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Use Mongoose
mongoose.Promise = Promise;  
mongoose.connect(`mongodb://localhost/${process.env.MONGO_URI}`);

// TODO Fix this bug
// Middleware
const verifyCookie = (req, res, next) => {
  const token = req.cookies.awesomeToken;
  const secret = 'superAwesomeSecretKey';
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({status: 'Access denied.'});
    }

    req.user = {
      id: decoded.data.id,
      username: decoded.data.username,
    }
    next();
  });
}

// Routes
app.use('/auth', routes.auth);
app.use('/profile', verifyCookie, routes.users);
app.use('/threads', verifyCookie, routes.threads);
app.use('/threads', verifyCookie, routes.comments);

// Server
app.listen(port, () => console.log(`Server started on port ${port}`));