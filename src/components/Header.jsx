
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="font-custom bg-white py-6 shadow-md">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-blue-500">Omotuwa</Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleSidebar}
          className="text-2xl md:hidden focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Links Section (Visible for Larger Screens) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-semibold hover:text-red-600">Home</Link>
          <Link to="/about" className="font-semibold hover:text-red-600">About</Link>
          <Link to="/skils" className="font-semibold hover:text-red-600">Skills</Link>
          <Link to="/contact" className="font-semibold hover:text-red-600">Contact</Link>
          <Link to="/project" className="font-semibold hover:text-red-600">Project</Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="text-xl absolute top-4 right-4 focus:outline-none"
        >
          <FaTimes />
        </button>

        {/* Sidebar Links */}
        <div className="mt-10 flex flex-col space-y-6 px-6">
          <Link
            to="/"
            onClick={toggleSidebar}
            className="font-semibold hover:text-red-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleSidebar}
            className="font-semibold hover:text-red-600"
          >
            About
          </Link>
          <Link
            to="/skils"
            onClick={toggleSidebar}
            className="font-semibold hover:text-red-600"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            onClick={toggleSidebar}
            className="font-semibold hover:text-red-600"
          >
            Contact
          </Link>
          <Link
            to="/project"
            onClick={toggleSidebar}
            className="font-semibold hover:text-red-600"
          >
            Project
          </Link>
        </div>
      </div>

      {/* Overlay (Optional: Click to Close Sidebar) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </div>
  );
} 
