import React, { useState, useEffect } from 'react';
import './ViewInventory.css';

function ViewInventory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [parts, setParts] = useState([]);
    const [filteredParts, setFilteredParts] = useState([]);

    const fetchParts = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/parts/search?term=${searchTerm}`
            );
            const data = await response.json();
            setFilteredParts(data);
        } catch (error) {
            console.error('Error fetching parts:', error);
        }
    };
    
    // Call fetchParts on searchTerm change
    useEffect(() => {
        fetchParts();
    }, [searchTerm]);
    
    useEffect(() => {
        // Filter parts based on the search term
        const filtered = parts.filter((part) =>
            part.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredParts(filtered);
    }, [searchTerm, parts]);

    return (
        <div className="view-inventory-container">
            <h1>View Inventory</h1>
            <input
                type="text"
                placeholder="Search for parts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="parts-list">
                {filteredParts.map((part) => (
                    <div key={part.id} className="part-card">
                        <h3>{part.name}</h3>
                        <p>Quantity: {part.quantity}</p>
                        <p>Machine ID: {part.machine_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewInventory;
