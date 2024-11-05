const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5003;

// Sample data
const events = [
  { id: 1, name: 'Music Festival', description: 'Join us for a day of amazing music and fun!' },
  { id: 2, name: 'Food Fair', description: 'Taste the best local and international cuisine.' },
  { id: 3, name: 'Cultural Parade', description: 'Experience the rich cultural diversity of our city.' },
];

const trips = [
  { id: 1, name: 'City Tour', description: 'Explore the landmarks and hidden gems of our city.' },
  { id: 2, name: 'Nature Hike', description: 'Discover beautiful trails and scenic views.' },
  { id: 3, name: 'Historical Sites Visit', description: 'Step back in time and visit our historic sites.' },
];

const activities = [
  { id: 1, name: 'Cooking Class', description: 'Learn to cook delicious local dishes.', img:'./canva.png' },
  { id: 2, name: 'Adventure Sports', description: 'Get your adrenaline pumping with our adventure activities.' },
  { id: 3, name: 'Cultural Workshops', description: 'Engage with local artists and learn new skills.' },
];

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// API endpoints
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.get('/api/activities', (req, res) => {
  res.json(activities);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
