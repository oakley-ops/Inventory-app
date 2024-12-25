import React from 'react';
import './ActivityCards.css';

function ActivityCards() {
    const activities = [
        { title: 'New Items', value: 741 },
        { title: 'New Orders', value: 123 },
        { title: 'Refunds', value: 12 },
        { title: 'Messages', value: 1 },
    ];

    return (
        <div className="activity-cards">
            {activities.map((activity, index) => (
                <div key={index} className="activity-card">
                    <h3>{activity.value}</h3>
                    <p>{activity.title}</p>
                </div>
            ))}
        </div>
    );
}

export default ActivityCards;
