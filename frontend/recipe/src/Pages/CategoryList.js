// CategoryList.js
import React, { useState } from 'react';

const categories = [
  { name: 'Appetizers', description: 'Start your meal off right with these delicious appetizers.' },
  { name: 'Main Courses', description: 'Hearty and satisfying main courses for any occasion.' },
  { name: 'Desserts', description: 'Sweet treats to end your meal on a high note.' },
  { name: 'Beverages', description: 'Refreshing drinks to complement your meal.' },
  { name: 'Snacks', description: 'Quick and easy snacks for anytime of the day.' },
  { name: 'Salads', description: 'Fresh and healthy salads for a light meal or side.' },
];

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Explore Our Categories</h1>
        
        {/* Dropdown Button */}
        <div className="flex justify-center">
          <button 
            onClick={toggleDropdown}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            {isOpen ? 'Hide Categories' : 'Show Categories'}
          </button>
        </div>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg mt-4 w-full max-w-md">
            <div className="p-4">
              {categories.map((category, index) => (
                <div key={index} className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-700">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
