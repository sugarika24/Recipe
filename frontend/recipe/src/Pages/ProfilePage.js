// ProfilePage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <ProfilePicture />
        <ProfileDetails/>
      </div>
    </div>
  );
};

export default ProfilePage;
