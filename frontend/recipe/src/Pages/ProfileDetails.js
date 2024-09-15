// ProfileDetails.js
import React, { useState } from 'react';

const ProfileDetails = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('This is a short bio.');

  const handleSave = () => {
    // Add save functionality here
    alert('Profile updated!');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">User Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-1" htmlFor="bio">Bio</label>
        <textarea 
          id="bio" 
          value={bio} 
          onChange={(e) => setBio(e.target.value)} 
          rows="4" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
        />
      </div>
      <button 
        onClick={handleSave} 
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};

export default ProfileDetails;
