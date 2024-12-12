const express = require('express');
const multer = require('multer'); 
const Event = require('../models/Event');
const User = require('../models/User');
const authenticateToken = require('../middlewares/authMiddleware');
const sendEventNotification = require('../emailnotif/sendgrid');

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/events');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });  

router.post('/events', authenticateToken, upload.single('image'), async (req, res) => {
  const { eventName, description, date, time, location, eventCategory, event_id, registrationLink } = req.body;
  const collegeId = req.user._id;  
  const eventImage = req.file ? `/uploads/events/${req.file.filename}` : null;  

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
      eventImage,
      registrationLink
    });

    await newEvent.save();

    const recipients = await User.find({}, "email").then(users => users.map(user => user.email));

    await sendEventNotification(newEvent, recipients);

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  }catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ message: 'Server error. Could not create event.' });
  }
});


router.get('/events/all', authenticateToken, async (req, res) => {
  console.log("Fetching events...");
  try {
    const events = await Event.find(); 
    console.log('Events fetched successfully');
    res.status(200).json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ message: 'Server error. Could not fetch events.' });
  }
});


module.exports = router;