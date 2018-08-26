const express = require('express');
const db = require('../models');
const router = express.Router();

// List all comments per thread
// router.get('/:thread/comments');

// Create a new comment
router.post('/:threadId/comments', (req, res) => {
  const threadId = req.params.threadId;
  const author = req.params.author;
  const title = req.params.title;
  const body = req.body.body;

  
});

// Update a comment
// router.put('/:threadId/comments/:commentId');

// Delete a comment
// router.delete('/:threadId/comments/:commentId');

module.exports = router;
