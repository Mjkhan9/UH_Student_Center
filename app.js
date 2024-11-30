// Mohammad Khan, 11/30/24, CIS 2336 12225
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const bookings = {}; // In-memory room booking storage

app.post('/book-room', (req, res) => {
    const { name, email, room } = req.body;

    if (bookings[room]) {
        res.json({ message: `${room} is already booked.` });
    } else {
        bookings[room] = { name, email };
        res.json({ message: `Booking successful for ${room}.` });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
