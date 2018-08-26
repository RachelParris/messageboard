const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./server/routes');
const port = 4000;
const app = express();
require('dotenv').config();


// Use body parser and cookie parser
app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Use Mongoose
mongoose.Promise = Promise;  
mongoose.connect(`mongodb://localhost/${process.env.MONGO_URI}`);

// Middleware
const verifyCookie = (req, res, next) => {
  const jwt = require("jsonwebtoken");
  const token = req.cookies.awesomeToken;
  const secret = 'superAwesomeSecretKey';

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({status: 'Access denied.'});
    }

    req.user = {
      username: decoded.data.username,
    }
    next();
  });
}

// Routes
app.use('/threads', routes.threads);
app.use('/threads', routes.comments);

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname + "/client/index.html"));
// });

app.listen(port, () => console.log(`Server started on port ${port}`));