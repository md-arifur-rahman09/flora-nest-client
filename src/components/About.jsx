import React from "react";

const About = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl  text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        {/* Image */}
        <img
          src="https://images.pexels.com/photos/32107832/pexels-photo-32107832/free-photo-of-close-up-of-white-jasmine-on-dark-background.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Nature & Plants"
          className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover rounded-lg shadow-md"
        />


        {/* Description */}
        <p className="text-lg text-gray-600 mt-6">
          Welcome to <span className="font-semibold text-blue-600">Flora Nest</span>, your go-to platform for exploring the beauty of flower trees.
          We are passionate about bringing nature closer to you, providing insights, tips, and an ever-growing collection of unique plants.
        </p>

        <p className="text-lg text-gray-600 mt-4">
          Whether you're a **gardening enthusiast**, a **nature lover**, or simply curious about different plant species, we've got you covered.
          Discover the wonders of sunlight, soil, water care, and everything you need to nurture plants in their full bloom!
        </p>

        {/* Mission & Vision */}
        <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-3">
            To educate and inspire people to cultivate and care for nature, creating a greener and more sustainable future.
          </p>
        </div>

        <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-3">
            A world where people embrace the beauty of plants, nurturing them with knowledge and care.
          </p>
        </div>

        {/* Contact Button */}
        <div className="mt-8">
          <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
