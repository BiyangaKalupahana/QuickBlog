import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import connectDB from './configs/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// Root route
app.get('/', (req, res) => res.send("API is working"));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
