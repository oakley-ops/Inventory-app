import React, { useState } from 'react';
import './FileUpload.css'; // Import the new CSS file

function FileUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5001/api/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('File uploaded and data imported successfully!');
            } else {
                setMessage(`Error: ${result.error}`);
            }
        } catch (err) {
            setMessage('Error uploading the file!');
        }
    };

    return (
        <div className="upload-container">
            <h1 className="upload-header">Upload Inventory File</h1>
            <form onSubmit={handleUpload}>
                {/* File input */}
                <input
                    type="file"
                    accept=".xlsx"
                    className="upload-input"
                    id="fileInput"
                    onChange={handleFileChange}
                />
                {/* Custom upload button */}
                <label htmlFor="fileInput" className="upload-button">
                    Choose File
                </label>
                <button
                    type="submit"
                    className="upload-button"
                    style={{ marginTop: '10px' }}
                >
                    Upload
                </button>
            </form>
            {message && <p className="upload-message">{message}</p>}
        </div>
    );
}

export default FileUpload;
