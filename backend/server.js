const express = require('express');
const cors = require('cors'); // Optional for handling cross-origin requests
const machineRoutes = require('./routes/machineRoutes'); // Adjust the path as needed
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/machines', machineRoutes);


const partRoutes = require('./routes/partRoutes'); // Import part routes
app.use('/api/parts', partRoutes); // Use the route

const manufacturerPartRoutes = require('./routes/manufacturerPartRoutes'); // Import the route file
app.use('/api', manufacturerPartRoutes); // Register the route under /api

// Server setup
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const pool = require('./db');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to PostgreSQL at:', res.rows[0].now);
    }
});
