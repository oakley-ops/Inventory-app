import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Fiserv Inventory</h2>
            <ul className="sidebar-menu">
                {/* Home Link */}
                <li className="active">
                    <Link to="/" className="sidebar-link">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>

                {/* View Inventory Link */}
                <li>
                    <Link to="/view-inventory" className="sidebar-link">
                        <i className="fas fa-box"></i> View Inventory
                    </Link>
                </li>

                {/* Machine Link */}
                <li>
                    <Link to="/machine" className="sidebar-link">
                        <i className="fas fa-cogs"></i> Machine
                    </Link>
                </li>

                {/* Add Item Link */}
                <li>
                    <Link to="/add-item" className="sidebar-link">
                        <i className="fas fa-plus"></i> Add Item
                    </Link>
                </li>

                {/* Report Link */}
                <li>
                    <Link to="/report" className="sidebar-link">
                        <i className="fas fa-chart-line"></i> Report
                    </Link>
                </li>
            </ul>

            <div className="sidebar-footer">
                <button className="btn btn-light">Log Out</button>
            </div>
        </div>
    );
}

export default Sidebar;
