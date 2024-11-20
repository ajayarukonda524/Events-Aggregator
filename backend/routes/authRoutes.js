const express = require('express');
const app = express();
// const port = 4001;
app.use(express.json()); // Middleware to parse JSON request bodies

// Define the route to handle student signup
app.post('/api/auth/student/signup', (req, res) => {
  const { email, password, username } = req.body;

  // Perform the signup logic, e.g., saving the student details to the database
  console.log('Signup data received:', req.body);

  // Send a response
  res.status(201).json({ message: 'Student signed up successfully' });
});
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
