// Mohammad Khan, 11/30/24, CIS 2336 12225
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory room booking storage
const bookings = {};

// POST endpoint for room booking
app.post('/book-room', (req, res) => {
    const { name, email, room } = req.body;

    // Validate input fields
    if (!name || !email || !room) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the room is already booked
    if (bookings[room]) {
        return res.json({ message: `${room} is already booked.` });
    }

    // Store booking details
    bookings[room] = { name, email };
    res.json({ message: `Booking successful for ${room}.` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
