const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure this points to your database connection

// PUT route to update a machine's description
router.put('/:id', async (req, res) => {
    const { id } = req.params; // Get the machine ID from the URL
    const { description } = req.body; // Get the new description from the request body

    try {
        // Update the machine's description in the database
        const result = await pool.query(
            'UPDATE machines SET description = $1 WHERE id = $2 RETURNING *',
            [description, id]
        );

        // If no rows are updated, the machine ID doesn't exist
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Machine not found' });
        }

        // Return the updated machine
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET route to fetch all machines
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM machines');
        res.json(result.rows); // Return all rows from the machines table
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/api/manufacturer-parts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM manufacturer_parts'); // Adjust table name as needed
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;


// POST route to create a new machine
router.post('/', async (req, res) => {
    const { name, description } = req.body; // Extract machine name and description from the request body

    try {
        // Insert the new machine into the database
        const result = await pool.query(
            'INSERT INTO machines (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );

        // Return the newly created machine
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
