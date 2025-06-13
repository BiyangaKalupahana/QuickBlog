const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/adminController'); // Adjust the path as needed

router.get('/test', (req, res) => {
  res.send("Admin Route Working");
});

router.post('/login', loginAdmin); // ✅ Add this line

module.exports = router;


export default adminRouter;
