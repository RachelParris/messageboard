const express = require('express');
const db = require('../models');
const router = express.Router();

// threadId = 5b82033d9354034828c942e8

// List all comments per thread
router.get('/threads/:threadId/comments', (req, res) => {
  // db.Thread.findOne()
});

// Create a new comment
router.post('/threads/:threadId/comments', (req, res) => {
  const threadId = req.params.threadId;

  // Find the requested thread
  db.Thread.findOne({ _id: threadId })
    .then(thread => {
      console.log(req.body)
      const author = req.body.author;
      const title = req.body.title || thread.title;
      const body = req.body.body;

      // Create comment to be added to thread
      db.Comment.create({
        author,
        title,
        body,
        // authorId: id
      })
        .then(comment => {
          thread.comments.push(comment);
          thread.save();
          res.status(200).json({ status: 'New comment added.' });
        })
        .catch(err => {
          console.log(err)
          res.status(400).json({ status: 'Could not add comment.' });
        });
    })
    .catch(err => {
      // console.log(err);
      res.status(400).json({ status: 'Cound not find thread by id.' });
    });
});

// Update a comment
// router.put('/threads/:threadId/comments/:commentId');

// Delete a comment
// router.delete('/threads/:threadId/comments/:commentId');

module.exports = router;
