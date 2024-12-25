import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from react-dom/client
import './index.css'; // Import CSS
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals (if used)
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals();
