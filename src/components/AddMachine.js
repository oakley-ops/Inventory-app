import React, { useState } from 'react';
import axios from 'axios';

function AddMachine() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        axios.post('/api/machines', { name, description })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Add Machine</h2>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddMachine;
