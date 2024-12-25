import React, { useState, useEffect } from 'react';

const AddPart = () => {
    const [machines, setMachines] = useState([]);
    const [manufacturerParts, setManufacturerParts] = useState([]);
    const [selectedMachine, setSelectedMachine] = useState('');
    const [selectedManufacturerPart, setSelectedManufacturerPart] = useState('');
    const [partNumber, setPartNumber] = useState(''); // Added for Part Number
    const [partName, setPartName] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        // Fetch Machines
        const fetchMachines = async () => {
            const response = await fetch('http://localhost:5000/api/machines');
            const data = await response.json();
            setMachines(data);
        };

        // Fetch Manufacturer Parts
        const fetchManufacturerParts = async () => {
            const response = await fetch('http://localhost:5000/api/manufacturer-parts');
            const data = await response.json();
            setManufacturerParts(data);
        };

        fetchMachines();
        fetchManufacturerParts();
    }, []);

    const handleAddPart = () => {
        // Add part logic
        console.log({
            selectedMachine,
            selectedManufacturerPart,
            partNumber, // Part Number added to log
            partName,
            quantity,
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', color: '#002855' }}>Add New Part</h1>
            <div style={{ marginBottom: '15px' }}>
                {/* Select Machine Dropdown */}
                <select
                    value={selectedMachine}
                    onChange={(e) => setSelectedMachine(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                >
                    <option value="">Select a Machine</option>
                    {machines.map((machine) => (
                        <option key={machine.id} value={machine.id}>
                            {machine.name}
                        </option>
                    ))}
                </select>

                {/* Select Manufacturer Part Number Dropdown */}
                <select
                    value={selectedManufacturerPart}
                    onChange={(e) => setSelectedManufacturerPart(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                >
                    <option value="">Select Manufacturer Part Number</option>
                    {manufacturerParts.map((part) => (
                        <option key={part.id} value={part.id}>
                            {part.partNumber}
                        </option>
                    ))}
                </select>

                {/* Part Number Input */}
                <input
                    type="text"
                    placeholder="Part Number"
                    value={partNumber}
                    onChange={(e) => setPartNumber(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />

                {/* Part Name Input */}
                <input
                    type="text"
                    placeholder="Part Name"
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />

                {/* Quantity Input */}
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
            </div>

            {/* Add Part Button */}
            <button
                onClick={handleAddPart}
                style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#0056b3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Add Part
            </button>

            {/* File Upload Section */}
            <div style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                Or Upload a File
            </div>
            <div style={{ marginTop: '10px' }}>
                <input type="file" style={{ width: '100%', padding: '10px' }} />
                <button
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '10px',
                        backgroundColor: '#0056b3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Upload File
                </button>
            </div>
        </div>
    );
};

export default AddPart;
