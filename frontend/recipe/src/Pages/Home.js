import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20211215/original/pngtree-spoon-korean-food-traditional-background-picture-image_1452798.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

        <div className="relative bg-white bg-opacity-90 p-8 rounded-xl max-w-lg mx-auto flex flex-col justify-center items-center shadow-lg">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 text-center">
            Welcome to Our Cooking Dairy
          </h2>
          <p className="text-lg mb-6 text-gray-600 text-center leading-relaxed">
            Discover a world of flavors and elevate your culinary skills with
            our carefully curated recipes and personalized meal planning tools.
            Get ready to turn your kitchen into a culinary adventure and make
            every meal memorable!
          </p>
          <Link to="/recipe">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
