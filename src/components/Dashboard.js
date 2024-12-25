import React from 'react';
import './Dashboard.css';

// Define the activities array
const activities = [
    { title: 'Total Items', value: 1243, icon: 'fas fa-boxes', color: '#28a745' }, // Green
    { title: 'Low Stock', value: 56, icon: 'fas fa-exclamation-triangle', color: '#ffc107' }, // Yellow
    { title: 'Out of Stock', value: 12, icon: 'fas fa-times-circle', color: '#dc3545' }, // Red
    { title: 'Recent Orders', value: 78, icon: 'fas fa-truck', color: '#007bff' }, // Blue
];

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="header">
                <input
                    type="text"
                    placeholder="Search Inventory"
                    className="search-bar"
                />
            </div>
            <div className="activity-cards">
                {activities.map((activity, index) => (
                    <div key={index} className="activity-card">
                        <i
                            className={`${activity.icon} card-icon`}
                            style={{ color: activity.color }}
                        ></i>
                        <i
                            className={`${activity.icon} card-icon`}
                            style={{ color: activity.color }}
                        ></i>

                        <h3>{activity.value}</h3>
                        <p>{activity.title}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Dashboard;
