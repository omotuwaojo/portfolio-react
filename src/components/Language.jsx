import React from 'react'

export default function Language() {
    const languages = [
        { name: "English", level: "Fluent", percentage: 90 },
        { name: "Spanish", level: "Intermediate", percentage: 70 },
        { name: "French", level: "Beginner", percentage: 50 },
        { name: "German", level: "Beginner", percentage: 40 },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl font-semibold text-center mb-6">Languages</h2>
                <p className="text-center text-gray-600 mb-8">
                    Languages I have proficiency in, along with my current skill level.
                </p>

                {/* Language List */}
                <div className="space-y-6">
                    {languages.map((language, index) => (
                        <div key={index} className="space-y-2">
                            {/* Language Name */}
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">{language.name}</span>
                                <span className="text-sm text-gray-600">{language.level}</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-blue-500 h-3 rounded-full"
                                    style={{ width: `${language.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
