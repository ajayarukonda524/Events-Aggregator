const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const Student = require('./models/User');
const College = require('./models/College');
const Event = require('./models/Event');  
const authMiddleware = require('./middlewares/authMiddleware');
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', eventRoutes);
app.use('/api/college', eventRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/events', eventRoutes);
app.use(express.json()); // Parse JSON request bodies


// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET;

// Helper function to generate JWT
const generateToken = (userId, userType) => {
  return jwt.sign({ id: userId, userType: userType }, JWT_SECRET, { expiresIn: '1h' });
};

// Signup route for students
app.post('/api/auth/student/signup', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  
  const existingUser = await Student.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newStudent = new Student({
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  });

  await newStudent.save();
  res.status(201).json({ message: 'Student signed up successfully' });
});

// Signup route for colleges
app.post('/api/auth/college/signup', async (req, res) => {
  const { collegeName, email, password, location } = req.body;

  if (!collegeName || collegeName.trim() === '') {
    return res.status(400).json({ message: 'College name is required and cannot be empty.' });
  }
  
  
  const existingCollege = await College.findOne({ email });
  if (existingCollege) {
    return res.status(400).json({ message: 'College already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newCollege = new College({
    collegeName,
    email,
    password: hashedPassword,
    location,
  });

  await newCollege.save();
  res.status(201).json({ message: 'College signed up successfully' });
});

// Student Login
app.post('/api/auth/student/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: 'Student not found' });
    }

    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = generateToken(student._id, 'student');
    res.status(200).json({
      authToken: token,
      user: {
        userType: 'student',
        id: student._id,
        email: student.email,
        username: student.username,
        firstName: student.firstName,
        lastName: student.lastName,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in student', error });
  }
});

// College Login
app.post('/api/auth/college/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const college = await College.findOne({ email });
    if (!college) {
      return res.status(400).json({ message: 'College not found' });
    }

    const validPassword = await bcrypt.compare(password, college.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = generateToken(college._id, 'college');
    res.status(200).json({
      authToken: token,
      user: {
        userType: 'college',
        id: college._id,
        email: college.email,
        collegeName: college.collegeName,
        location: college.location,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in college', error });
  }
});

// Fetch student profile details
app.get('/api/student/profile', authMiddleware, async (req, res) => {
  res.json(req.user);  // `req.user` will contain the student data
});

// Fetch college profile details
app.get('/api/college/profile', authMiddleware, async (req, res) => {
  res.json(req.user);  // `req.user` will contain the college data
});

app.get('/api/student/events', authMiddleware, async (req, res) => {
  try {
    const studentId = req.user.id;
    console.log('Student ID:', studentId);  // Log the studentId for debugging
    
    if (!studentId) {
      return res.status(400).json({ message: 'Student ID is missing in the request' });
    }

    // Fetch events where the student is in the participants array, excluding null or undefined values
    const events = await Event.find({ participants: { $in: [studentId] } })
      .where('participants').ne(null);  // Ensure null is excluded from the participants array

    if (!events || events.length === 0) {
      return res.status(400).json({ message: 'No events found for this student' });
    }
    console.log(events.eventName);
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Post a new event
app.post('/api/college/events', authMiddleware, async (req, res) => {
  const collegeId = req.user.id;
  const { eventName, description, date, time, location, eventCategory, event_id } = req.body;
  
  const newEvent = new Event({
    eventName,
    description,
    date,
    time,
    location,
    eventCategory,
    collegeId,
    event_id,
    participants: []
  });

  await newEvent.save();
  res.status(201).json({ message: 'Event posted successfully', event: newEvent });
});

// Modify an event
app.put('/api/college/events/:eventId', authMiddleware, async (req, res) => {
  const { eventId } = req.params;
  const { eventName, description, date, time, location, eventCategory, event_id } = req.body;

  const event = await Event.findByIdAndUpdate(eventId, { eventName, description, date, time, location, eventCategory, event_id }, { new: true });

  if (!event) {
    return res.status(400).json({ message: 'Event not found' });
  }

  res.json({ message: 'Event updated successfully', event });
});

// Delete an event
app.delete('/api/college/events/:eventId', authMiddleware, async (req, res) => {
  const { eventId } = req.params;

  const event = await Event.findByIdAndDelete(eventId);

  if (!event) {
    return res.status(400).json({ message: 'Event not found' });
  }

  res.json({ message: 'Event deleted successfully' });
});

app.post('/api/student/register-event', async (req, res) => {
  console.log('Received request for event registration');
  try {
    const { eventId } = req.body;
    const token = req.headers['authorization']?.split(' ')[1];
    console.log('Token received:', token);

    if (!token) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }

    // Decode the token to get student ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decoded.id;
    console.log('Decoded token:', decoded);
    console.log('Student ID:', studentId);

    // Find the event in the database using async/await
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    console.log('Found event:', event.eventName);

    // Ensure participants is a valid array and exclude invalid values
    if (!Array.isArray(event.participants)) {
      event.participants = [];
    }
    event.participants = event.participants.filter((p) => p); // Remove null/undefined

    // Add student ID to participants if not already present
    if (studentId && !event.participants.includes(studentId)) {
      event.participants.push(studentId);
      console.log('Added participant:', studentId);
      await event.save();
    } else {
      console.log('Student already registered or invalid ID.');
    }

    res.status(200).json({ message: 'Successfully registered for the event' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Failed to register for the event' });
  }
});


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
