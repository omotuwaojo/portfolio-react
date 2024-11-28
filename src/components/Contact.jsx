import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-12  md:m-12">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Leave Us Your Info</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-white shadow-md rounded-md p-6">
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  required
                  type="text"
                  placeholder="Your Full Name (Required)"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  required
                  type="email"
                  placeholder="Your Email (Required)"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  required
                  type="text"
                  placeholder="Subject"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="bg-white shadow-md rounded-md p-6 space-y-8">
            {/* Address Section */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-800 font-bold">Country: Nigeria</p>
                <p className="text-gray-800">City: Ijebu-Ode, Ogun State.</p>
                <p className="text-gray-800">Street: Folagbade </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-800 font-bold">Email: omotuwaojo@gmail.com</p>
                <p className="text-gray-800">LinkedIn: @OmotuwaOjo</p>
                <p className="text-gray-800">Telegram: @OmotuwaOjo</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-800 font-bold">Support Services: 15369</p>
                <p className="text-gray-800">Office: +234 (081)579 688 31</p>
                <p className="text-gray-800">Personal: +234 (070)436 657 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
