const express = require('express');
const db = require('../models');
const router = express.Router();


// Create a new comment
router.post('/:threadId/comments', (req, res) => {
  const threadId = req.params.threadId;

  // Find the requested thread
  db.Thread.findOne({ _id: threadId })
    .then(thread => {
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
          res.status(400).json({ status: 'Could not add comment.' });
        });
    })
    .catch(err => {
      res.status(400).json({ status: 'Cound not find thread by id.' });
    });
});

// TODO Update a comment
// router.put('/:threadId/comments/:commentId');

// TODO Delete a comment
// router.delete('/:threadId/comments/:commentId');

module.exports = router;
