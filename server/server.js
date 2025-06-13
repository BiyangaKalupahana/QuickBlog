const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes'); // Adjust path if needed
const { default: adminRouter } = require('./routes/adminRoutes');
const { default: blogRouter } = require('./routes/blogRoutes');
import connectDB from './configs/db.js';

dotenv.config();

const app = express();
await connectDB()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Mount the admin routes here
app.use('/api/admin', adminRouter);
app.get('/', (req,res)=> res.send("API is working"))
app.use('/api/blog', blogRouter)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('❌ Database Connection Error:', err.message);
  });
