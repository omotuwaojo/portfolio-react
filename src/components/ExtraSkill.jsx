import React from 'react'
import { FaGitAlt, FaPython, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss } from "react-icons/si";

export default function ExtraSkill() {
    const skills = [
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-500 text-4xl" /> },
        { name: "Django", icon: <SiDjango className="text-green-600 text-4xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
    ];

    return (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-6">Extra Skills</h2>
            <p className="text-center text-gray-600 mb-8">
              Technologies and tools I have experience with.
            </p>
    
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 group"
                >
                  {/* Icon with Animation */}
                  <div className="transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6">
                    {skill.icon}
                  </div>
                  {/* Skill Name with Fade Effect */}
                  <p className="text-lg font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
