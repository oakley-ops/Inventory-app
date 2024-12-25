const multer = require('multer');
const xlsx = require('xlsx');
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// POST route to handle file uploads
router.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        // Read the uploaded Excel file
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        // Insert each row into the database
        for (const row of data) {
            const { name, quantity, machine_id } = row;
            await pool.query(
                'INSERT INTO parts (name, quantity, machine_id) VALUES ($1, $2, $3)',
                [name, quantity, machine_id]
            );
        }

        res.status(200).send('File processed and data imported successfully.');
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('An error occurred while processing the file.');
    }
});

module.exports = router;
