import React from 'react';
import './header.css'; // Optional, add if you have Header-specific styles.

function Header() {
    return (
        <div className="header">
            <input
                type="text"
                placeholder="Search"
                className="search-bar"
            />
        </div>
    );
}

export default Header;
