const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongojs = require('mongojs');
const router = express.Router();


// Save the URL of our database as well as the name of our collection
const databaseUrl = 'reddit-clone';
const collections = ['Users'];

// Use mongojs to hook the database to the db constiable
const db = mongojs(databaseUrl, collections);


// Register a user
router.post('/register', (req, res) => {
  const saltRounds = 10;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return console.log(err);
    }

    // Store user info with hash in db.
    db.Users.insert(
      {
        username: username,
        email: email,
        password: hash
      }, (err, user) => {
        if (err) {
          return console.log(err);
        }
        res.status(200).json({status:'User created! Added user to db.', user});
      }
    )
  });
});


// Login a user
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password
  db.Users.findOne({
    username: username
  }, (err, user) => {
    if (err) {
      return res.status(400).json({status: 'Username and password do not match.'});
    } else if (!user) {
      return res.json({status: 'Username and password do not match.'});
    } else {
      // Check that user password matches. Load hash from db.
      if (!bcrypt.compareSync(password, user.password)) {
        res.json({status: 'Username and password do not match.'})
      } else {
        // Generate token to send to client
        const token = jwt.sign({
          iss: 'reddit-clone',
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            id: user._id,
            username: user.username,
          }
        }, 'superAwesomeSecretKey');
        res.cookie("awesomeToken", token).json({ status: 'User is now logged in.' });
        // res.status(200).redirect('/users/profile');
      }
    }
  });
});

// TODO Reset user password via email w/ nodemailer

// TODO Delete a user from db

module.exports = router;