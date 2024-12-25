import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Sidebar from './components/Sidebar'; // Sidebar component
import Dashboard from './components/Dashboard'; // Dashboard component
import ViewInventory from './components/ViewInventory'; // View Inventory component
import Machine from './components/Machine'; // Machine component
import AddItem from './components/AddItem'; // Add Item component
import Report from './components/Report'; // Report component
import FileUpload from './components/FileUpload'; // File Upload component
import AddPart from './components/AddPart'; // Import the AddPart component

function App() {
    return (
        <div className="App" style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar on the left */}
            <Sidebar />
            {/* Content section for rendering components */}
            <div className="content" style={{ flex: 1, overflowY: 'auto' }}>
                <Routes>
                    {/* Define routes */}
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/view-inventory" element={<ViewInventory />} />
                    <Route path="/machine" element={<Machine />} />
                    <Route path="/add-item" element={<AddPart />} /> {/* Updated */}
                    <Route path="/report" element={<Report />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
