const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;  // Ensure this variable is correctly defined
    if (!dbURI) {
      throw new Error('MongoDB URI is not defined in the environment variables.');
    }
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
