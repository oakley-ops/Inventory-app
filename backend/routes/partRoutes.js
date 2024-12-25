const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

router.get('/', async (req, res) => {
    try {
        const parts = await pool.query('SELECT * FROM parts');
        res.json(parts.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    const { machine_id, name, quantity } = req.body;
    try {
        const newPart = await pool.query(
            'INSERT INTO parts (machine_id, name, quantity) VALUES ($1, $2, $3) RETURNING *',
            [machine_id, name, quantity]
        );
        res.json(newPart.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
