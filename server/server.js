const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./configs/db');
const adminRouter = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API is working"));
app.use('/api/admin', adminRouter);

// Start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(); // ✅ This is the only place to call await connectDB()
    app.listen(PORT, () => {
      console.log('Server is running on port ' + PORT);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer(); // ✅ Start everything inside this async function
