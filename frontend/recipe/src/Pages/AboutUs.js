import React, { useState } from 'react';

// Example team members data
const teamMembers = [
  { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://via.placeholder.com/150' },
  { name: 'John Smith', role: 'Chief Technology Officer', image: 'https://via.placeholder.com/150' },
  { name: 'Alice Johnson', role: 'Lead Chef', image: 'https://via.placeholder.com/150' },
  { name: 'Bob Brown', role: 'Marketing Manager', image: 'https://via.placeholder.com/150' },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Cooking Dairy! We are passionate about bringing delicious recipes and culinary inspiration to your kitchen. 
            Our team of dedicated food enthusiasts is committed to providing you with a wide range of recipes, from quick snacks 
            to elaborate meals, that will satisfy your taste buds and make cooking a joyful experience.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
