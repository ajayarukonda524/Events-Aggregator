// Load environment variables from .env file
require('dotenv').config();

const nodemailer = require('nodemailer');

// Create a transporter object using SendGrid service
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey', // Use 'apikey' as the username
        pass: process.env.SENDGRID_API_KEY // Use your actual SendGrid API key from the environment variable
    }
});

// Set up email data
const mailOptions = {
    from: 'prasannadara17@gmail.com', // Use your verified sender email here
    to: 'ajayarukonda524@gmail.com', // Replace with recipient's email
    subject: '🌟 Exciting Updates from Happening Hub! 🌟',
    text: `
Hello,

We're thrilled to bring you the latest updates from Happening Hub! 🎉

Stay tuned for more exciting events, updates, and activities tailored just for you.

Thank you for being a part of our community!

Best regards,
The Happening Hub Team
`
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Email sent: ' + info.response);
});
