const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const router = express.Router();


// Register a user
router.post('/register', (req, res) => {
  const saltRounds = 10;
  const username = req.body.username;
  const profileName = req.body.profileName;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      throw newError(err);
    }

    // Store user info with hash in db.
    db.User.create({
      username,
      profileName,
      email,
      password: hash
    })
      .then(user => {
        res.status(200).json({ status: ' User created!'});
      })
      .catch(err => {
        res.status(400).json({ status: 'Unable to create new user.' });
      });
  });
});


// Login a user
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password
  
  db.User.findOne({username})
    .then(user => {
      // Check that user password matches. Load hash from db.
      if (!bcrypt.compareSync(password, user.password)) {
        res.json({status: 'Username and password do not match.'});
      } else {
        // Generate token to send to client
        const token = jwt.sign({
          iss: 'reddit-clone',
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            id: user._id,
            username: user.username,
          }
        }, process.env.SECRET_KEY);
        res.cookie("awesomeToken", token).json({ status: 'User is now logged in.' });
        // res.status(200).redirect('/users/profile');
      }
    })
    .catch(err => {
      res.status(400).json({ status: 'Username and password do not match.' });
    });
});

// TODO Reset user password via email w/ nodemailer

// TODO Delete a user from db

module.exports = router;