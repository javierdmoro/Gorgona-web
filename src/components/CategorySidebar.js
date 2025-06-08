import React, { useState } from 'react';

const CategorySidebar = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-64 p-4">
      <h2 className="text-lg font-semibold mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category 
                  ? 'bg-gray-200 font-medium' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;