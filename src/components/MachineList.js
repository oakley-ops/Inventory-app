import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MachineList() {
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        axios.get('/api/machines')
            .then(response => setMachines(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Machines</h1>
            <ul>
                {machines.map(machine => (
                    <li key={machine.id}>{machine.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MachineList;
