const express = require('express');
const multer = require('multer');  // Import multer
const Event = require('../models/Event');
const authenticateToken = require('../middlewares/authMiddleware');


const router = express.Router();

// Set up the multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/events'); // Save images to the 'uploads/events' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Ensure unique filenames
  }
});

const upload = multer({ storage: storage });  
// POST route to create an event (College only)
router.post('/events', authenticateToken, upload.single('image'), async (req, res) => {
  console.log(req.body);
  const { eventName, description, date, time, location, eventCategory, event_id } = req.body;
  const collegeId = req.user._id;  
  const eventImage = req.file ? `/uploads/events/${req.file.filename}` : null;  // Image path

  try {
    const newEvent = new Event({
      eventName,
      description,
      date,
      time,
      location,
      eventCategory,  
      event_id, 
      college: collegeId, 
      eventImage
    });

    await newEvent.save();

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ message: 'Server error. Could not create event.' });
  }
});


router.get('/events/all', authenticateToken, async (req, res) => {
  console.log("Fetching events...");
  try {
    const events = await Event.find(); // Fetch all events
    console.log('Events fetched successfully');
    res.status(200).json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ message: 'Server error. Could not fetch events.' });
  }
});


module.exports = router;