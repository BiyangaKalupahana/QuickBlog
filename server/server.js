const express = require('express');
const cors = require('cors');
require('dotenv').config();
import connectDB from './configs/db.js';

const app = express();

await connectDB()

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API is working"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
