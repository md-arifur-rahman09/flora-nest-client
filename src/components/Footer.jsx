import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
  
      <div className="container mx-auto px-6 text-black">

        {/* Grid Layout for better responsiveness */}
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">

          {/* Company Info */}
          <div>
            <h2 className="text-lg font-semibold">Flora Nest</h2>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <div className="mt-2 space-y-2">
              <Link className="text-blue-500 hover:underline block" to="/">Home</Link>
              <Link className="text-blue-500 hover:underline block" to="/about">About</Link>
              <Link className="text-blue-500 hover:underline block" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"> Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"> Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
   
  );
};

export default Footer;
