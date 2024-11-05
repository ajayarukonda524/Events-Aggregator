// server.js
const express = require('express');
const connectDB = require('./config/db'); // Ensure the path is correct
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
