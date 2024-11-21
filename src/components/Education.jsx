import React from 'react'

export default function Education() {
    const educationData = [
        {
            institution: "University Of Toronto",
            certificate: "Certificate Of Web Training",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh eu faucibus nunc, egestas id amet porttitor.",
            role: "Student",
            date: "2019 - Dec 2021",
        },
        {
            institution: "Programming Course",
            certificate: "Certificate Of Web Training",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus.",
            role: "Student",
            date: "2018 - 2020",
        },
        {
            institution: "Web Developer Courses",
            certificate: "Certificate Of Web Training",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus risus enim neque eget dui. Pellentesque risus enim neque eget.",
            role: "Student",
            date: "2017 - 2019",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl font-semibold text-center mb-4">Education</h2>
                <p className="text-center text-gray-600 mb-8">
                    Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor <br />
                    Do Amet Sint, Velit Officia Consequat Duis Enim Velit Mollit, <br />
                    Lorem Ipsum
                </p>

                {/* Education Items */}
                <div className="space-y-6">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-md p-6 flex items-center justify-between"
                        >
                            {/* Left Section */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold">{item.institution}</h3>
                                <span className="text-sm text-gray-500">
                                    {item.certificate}
                                </span>
                                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                            </div>

                            {/* Right Section */}
                            <div className="text-right">
                                <div className="text-sm font-medium text-gray-500">
                                    {item.role}
                                </div>
                                <div className="bg-yellow-400 text-white text-sm font-medium px-3 py-1 rounded-md mt-2">
                                    {item.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
