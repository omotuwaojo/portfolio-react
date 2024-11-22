import React from 'react';
import { FaDownload } from "react-icons/fa";

export default function CvButton() {
  return (
    <div className="about-page p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 mb-6">
        Welcome to my portfolio! Here you can find detailed information about my
        professional background, skills, and work experience.
      </p>
      
      {/* Download CV Button */}
      <a
        href="/path-to-your-cv.pdf" // Replace with your CV's path
        download="YourName-CV" // File name when downloaded
        className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors"
      >
        <FaDownload className="text-lg" />
        Download CV
      </a>
    </div>
  )
}
