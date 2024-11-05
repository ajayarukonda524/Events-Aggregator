const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { title, description, date, location, category } = req.body;
  try {
    const event = new Event({ title, description, date, location, category, organizer: req.user.id });
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer');
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};
