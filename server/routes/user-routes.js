const express = require('express');
const mongojs = require('mongojs');
const databaseUrl = 'reddit-clone';
const collections = ['Users', 'Threads'];
const db = mongojs(databaseUrl, collections);
const router = express.Router();


router.get('/profile', (req, res) => {
  // Username from middleware
  const username = req.user.username;

  db.Users.findOne({username}, (err, data) => {
    if (err) {
      return console.log(err);
    }

    const {email, username } = data;

    res.status(200).json({
      email,
      username
    });
  });
});

// TODO Update user info

module.exports = router;