import React from 'react';
import { Bar } from 'react-chartjs-2';

function SalesChart() {
    const data = {
        labels: ['Confirmed', 'Packed', 'Refunded', 'Shipped'],
        datasets: [
            {
                label: 'Sales',
                data: [20, 15, 5, 25],
                backgroundColor: '#007bff',
            },
        ],
    };

    return (
        <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h3>Sales</h3>
            <Bar data={data} />
        </div>
    );
}

export default SalesChart;
