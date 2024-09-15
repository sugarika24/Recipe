// LoginPage.js
import React from 'react';

// Importing icons from react-icons
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

        {/* Email/Password Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-black rounded-lg shadow-md"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center mt-6 mb-4">
          <hr className="w-1/3 border-gray-300" />
          <span className="px-3 text-gray-500 font-medium">or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>
        
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Login with</h2>

        {/* Social Media Buttons with Icons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            <FaFacebook size={20} />
          </button>

          <button className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition duration-300">
            <FaGoogle size={20} />
          </button>

          <button className="bg-blue-400 text-white p-3 rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            <FaTwitter size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
