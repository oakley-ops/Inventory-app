import React, { useState, useEffect } from 'react';
import './Machine.css';

function Machine() {
    const [machines, setMachines] = useState([]); // State to hold machines

    // Fetch machines from the API
    useEffect(() => {
        fetch('http://localhost:5001/api/machines')
            .then((response) => response.json())
            .then((data) => setMachines(data))
            .catch((error) => console.error('Error fetching machines:', error));
    }, []);

    useEffect(() => {
        const fetchMachines = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/machines');
                const data = await response.json();
                console.log(data); // Log to verify data
                setMachines(data);
            } catch (error) {
                console.error('Error fetching machines:', error);
            }
        };
        
        const fetchManufacturerParts = async () => {
            const response = await fetch('http://localhost:5000/api/manufacturer-parts');
            const data = await response.json();
            return data;
        };
    
        fetchMachines();
    }, []);
    

    return (
        <div style={{ padding: '20px' }}>
            <h1>Machines</h1>
            <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {machines.map((machine) => (
                        <tr key={machine.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{machine.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{machine.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{machine.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Machine;
