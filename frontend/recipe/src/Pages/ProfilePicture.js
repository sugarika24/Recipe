// ProfilePicture.js
import React, { useState } from 'react';

const ProfilePicture = () => {
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150'); // Default profile picture

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setProfilePic('https://via.placeholder.com/150'); // Reset to default
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4" />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="mb-2" 
      />
      <button 
        onClick={handleRemovePicture} 
        className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
      >
        Remove Picture
      </button>
    </div>
  );
};

export default ProfilePicture;
