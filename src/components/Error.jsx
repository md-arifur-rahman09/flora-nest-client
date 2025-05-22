import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Error Image */}
      <img 
        src="https://cdn.pixabay.com/photo/2017/08/30/07/56/error-2694253_1280.png" 
        alt="404 Not Found" 
        className="w-96 max-w-full mb-6"
      />

      {/* Error Message */}
      <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
      <p className="text-lg mt-2">The page you're looking for doesn't exist.</p>

      {/* Back to Home Button */}
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
    );
};

export default Error;