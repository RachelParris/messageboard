const express = require('express');
const db = require('../models');
const router = express.Router();


router.get('/', (req, res) => {
  // Id from middleware
  const id = req.user.id;

  db.User.findById(id, (err, data) => {
    if (err) {
      return console.log(err);
    }


   const user = {
      createdAt: data.createdAt,
      threads: data.threads,
      username: data.username,
      profileName: data.profileName,
      bio: data.bio
   }

    res.status(200).json(user);
  });
});

// TODO Update user info

module.exports = router;