const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, 
    required: true,
  },
  event_id: {
    type: String,
    unique: true,
    default: uuidv4,
  },
  location: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String, 
    required: true,
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',  // Reference to the College model
    required: true,
  },
  eventImage: {
    type: String,  // This will store the file path of the uploaded image
    required: false  // Image is optional when creating an event
  }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
