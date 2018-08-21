const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('./server/routes/auth-routes');
const users = require('./server/routes/user-routes');
const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

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
      // id: decoded.data._id,
      username: decoded.data.username,
    }
    next();
  });
}

// Routes
app.use('/auth', auth);
app.use('/users', verifyCookie, users);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.listen(port, () => console.log(`Server started on port ${port}`));