import React, { useState } from 'react';
import './AddItem.css';

function AddItem() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            console.log('Uploading file:', file.name);
            // Add logic to send the file to the backend
        } else {
            alert('Please select a file first.');
        }
    };

    return (
        <div className="add-item-container">
            <h1>Add Item</h1>
            <div className="file-upload-section">
                <label className="file-upload-label">
                    <i className="fas fa-upload"></i> Upload File
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </label>
                <button onClick={handleUpload} className="upload-button">
                    Upload
                </button>
            </div>
        </div>
    );
}

export default AddItem;
