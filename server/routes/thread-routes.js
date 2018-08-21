const express = require('express');
const mongojs = require('mongojs');
const databaseUrl = 'reddit-clone';
const collections = ['Users', 'Threads'];
const db = mongojs(databaseUrl, collections);
const router = express.Router();


// List all threads.
// router.get('/', (req, res) => {});

// Create a new thread
router.post('/', (req, res) => {
  const username = req.user.username;
  const title = req.user.title;
  const message = req.user.message;
  
  db.Users.findOne({username}, (err, data) => {
    if (err) {
      return console.log(err);
    }

    const {_id } = data;

    db.Threads.insert({
      author_id: _id,
      title,
      message,
    }, (err, thread) => {
      if (err) {
        return console.log(err);
      }

      res.status(200).json({
        status:'New thread created.',
        thread
      });
    });
  });
});


// Edit a thread's original post
// router.put('/:id', (req, res) => {});

// Delete a thread
// router.delete('/:id', (req, res) => {});


module.exports = router;