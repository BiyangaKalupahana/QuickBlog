const express = require('express');
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send("Admin Route Working");
});

module.exports = router;
