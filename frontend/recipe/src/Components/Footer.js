// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-800 py-6 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold text-gray-700">CookingDairy</h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row mb-4 md:mb-0">
            <li className="md:mx-4 mb-2 md:mb-0">
              <a href="#home" className="hover:text-gray-600">Home</a>
            </li>
            <li className="md:mx-4 mb-2 md:mb-0">
              <a href="#about" className="hover:text-gray-600">About</a>
            </li>
            <li className="md:mx-4 mb-2 md:mb-0">
              <a href="#services" className="hover:text-gray-600">Services</a>
            </li>
            <li className="md:mx-4 mb-2 md:mb-0">
              <a href="#contact" className="hover:text-gray-600">Contact Us</a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-700" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-700" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-gray-700" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-700" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} CookingDairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
