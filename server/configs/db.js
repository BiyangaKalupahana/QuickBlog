const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
    console.log("✅ Database Connected");
  } catch (error) {
    console.log("❌ Database Connection Error:", error.message);
  }
};

module.exports = connectDB;
