import React from 'react';
import './CategoryGrid.css';

function CategoryGrid() {
    const categories = ['Clothes', 'Shoes', 'Accessories', 'Bags', 'Glasses'];

    return (
        <div className="category-grid">
            <h3>Top Categories</h3>
            <div className="grid">
                {categories.map((category, index) => (
                    <div key={index} className="grid-item">
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryGrid;
