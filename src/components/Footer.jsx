import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-300   text-green-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Logo & Copyright */}
          <div>
            <Link to="/" className="text-2xl font-bold hover:underline inline-block mb-2">
              🌿 Flora Nest
            </Link>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-600 hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedinIn /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaXTwitter /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
