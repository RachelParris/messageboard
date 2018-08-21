const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  console.log(req.user);
});

module.exports = router;