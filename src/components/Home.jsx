// src/components/Homepage.js
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our Education Website
        </h1>
        <p className="text-gray-600">
          Unlock the doors to knowledge and success.
        </p>
        <div className="mt-8">
          {/* <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Get Started
          </a> */}
        </div>
      </div>

      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
        {/* Add your course cards or content here */}
      </div>

      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2023 Your Education Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
