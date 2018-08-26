const express = require('express');
const db = require('../models');
const router = express.Router();


// List all threads
router.get('/', (req, res) => {

  db.Thread.find({})
    .then((docs) => {

      const data = docs.map(doc => {
        return {
          author: doc.author,
          title: doc.title,
          body: doc.body,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt
        }
      });

      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ status: err });
    });
});

// List one thread w/ comments
router.get('/:id', (req, res) => {
  const id = req.params.id;

  db.Thread.findOne({ _id: id })
    .populate('comments')
    .then(thread => {
      res.status(200).json(thread);
    })
    .catch(err => {
      res.status(400).json({ status: 'Cound not find thread by id.' });
    });
});

// Create a new thread
router.post('/', (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const body = req.body.body;

  db.Thread.create({
    author,
    title,
    body
  })
    .then(doc => {
      res.status(200).json({ status: 'New thread created.' });
    })
    .catch(err => {
      res.status(400).json({ status: err });
    });
});

// Update a thread
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const author = req.body.author;
  const title = req.body.title;
  const body = req.body.body;

  db.Thread.findByIdAndUpdate(id, {
    author,
    title,
    body,
    updatedAt: new Date(),
    updated: true
  })
    .then(doc => {
      res.status(200).json({ status: `Updated ${title} thread` });
    })
    .catch(err => {
      res.status(400).json({ status: err });
    });
});

// Delete a thread
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.Thread.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json({ status: 'Deleted thread successful' });
    })
    .catch(err => {
      res.status(400).json({ status: err });
    });
});

module.exports = router;
