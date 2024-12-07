import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

export default function Skill() {
    const skills = [
        { name: "HTML", percentage: 90, icon: <FaHtml5 /> },
        { name: "CSS", percentage: 85, icon: <FaCss3Alt /> },
        { name: "JavaScript", percentage: 80, icon: <FaJsSquare /> },
        { name: "React", percentage: 75, icon: <FaReact /> },
        { name: "Tailwind CSS", percentage: 85 },
        { name: "Node.js", percentage: 70, icon: <FaNodeJs /> },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl font-semibold text-center mb-4">My Skills</h2>
                <p className="text-center text-gray-600 mb-8">
                    A brief showcase of my technical skills and expertise. <br />
                    Constantly improving and learning to deliver the best results.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-6" data-aos="fade-up-right">
                            {/* Skill Name */}
                            <div className="flex items-center mb-2">
                                <span className="text-2xl text-blue-500 mr-3">{skill.icon}</span>
                                <h3 className="text-lg font-bold">{skill.name}</h3>
                            </div>
                            {/* Progress Bar */}
                            <div className="relative w-full h-4 bg-gray-200 rounded-full">
                                <div
                                    className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full  animate-load transition-all duration-500"
                                    style={{ width: `${skill.percentage}%`,
                                    '--progress-width': skill.percentage,
                                    animationDelay: `${index * 0.3}s`, // Staggered delay
                                 
                                 }}
                                ></div>

                            </div>

                            {/* Percentage */}
                            <span className="text-sm text-gray-500 mt-2 inline-block">
                                {skill.percentage}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
