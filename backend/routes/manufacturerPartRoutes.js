const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure this points to your database connection

// GET endpoint to fetch all manufacturer parts
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
