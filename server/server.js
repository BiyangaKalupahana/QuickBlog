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

await connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

app.get('/', (req, res) => res.send("API is working"));

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});