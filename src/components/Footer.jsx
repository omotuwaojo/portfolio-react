import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare,FaWhatsappSquare } from 'react-icons/fa';


export default function Footer() {
  return(
  <footer className="bg-white py-4">
  <div className="flex justify-center space-x-6">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookSquare className="text-gray-600 hover:text-blue-600" size={34} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitterSquare className="text-gray-600 hover:text-blue-400" size={34} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-gray-600 hover:text-blue-700" size={34} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagramSquare className="text-gray-600 hover:text-blue-500" size={34} />
    </a>
    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
      <FaWhatsappSquare className="text-gray-600 hover:text-blue-500" size={34} />
    </a>
  </div>
</footer>
);
};
