import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Contact = () => {
    const {user}=use(AuthContext);
    // console.log(user);

    const handleSubmit = (e) => {
  e.preventDefault();
  Swal.fire(
    "Thanks for your message.😊");
   

        
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mt-2">
          Have any questions? We'd love to hear from you!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg mt-1"
                placeholder="Your Name" 
                defaultValue={user?.displayName}
                required
              />
            </div>
            
            {/* Email Input */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border rounded-lg mt-1" 
                placeholder="Your Email" 
                defaultValue={user?.email}
                required
              />
            </div>
          </div>

          {/* Subject Input */}
          <div className="mt-4">
            <label className="block text-gray-700">Subject</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg mt-1" 
              placeholder="What's on your mind?" 
              required
            />
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <label className="block text-gray-700">Message</label>
            <textarea 
              className="w-full p-3 border rounded-lg mt-1 resize-none" 
              rows="5" 
              placeholder="Type your message here..." 
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">📍 Location: Dhaka, Bangladesh</p>
          <p className="text-gray-600">📞 Phone: +880 1234-567890</p>
          <p className="text-gray-600">📧 Email: contact@floranest.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
