import React, { useState } from "react";
import logo from "../cookingdairy-high-resolution-logo.png";
import { Link } from "react-router-dom";

const categories = [
  { name: "Appetizers", path: "/appetizers" },
  { name: "Main Courses", path: "/main-courses" },
  { name: "Desserts", path: "/desserts" },
  { name: "Beverages", path: "/beverages" },
  { name: "Snacks", path: "/snacks" },
  { name: "Salads", path: "/salads" },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-transparent relative z-50">
      {" "}
      {/* Added relative and z-50 */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-20 w-auto" />

          {/* Navigation Links */}
          <Link to={`/`}>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
          </Link>
          <Link to={`/aboutus`}>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </a>
          </Link>
          <Link to={`/recipe`}>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Recipe
            </a>
          </Link>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md text-sm font-medium"
          >
            Meal Planner
          </a>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md text-sm font-medium"
          >
            Dashboard
          </a>

          {/* Dropdown for CategoryList */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              CategoryList
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-4 items-center ml-auto">
          {/* Search Input */}
          <input
            type="text"
            className="bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
            placeholder="What do you want to cook?"
          />

          {/* Log In Button */}
          <Link to={`/login`}>
            <button className="bg-white text-black px-3 py-2 rounded-md text-sm font-medium">
              Log In
            </button>
          </Link>
        </div>
        <div className="flex items-center space-x-3 ml-5">
          {/* Profile Section */}
          <img
            src="path-to-profile-pic.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <Link to={`/profile`}>
            <span className="text-black text-sm font-medium">Profile</span>
          </Link>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
