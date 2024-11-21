import React from 'react'

export default function Map() {
    return (
        <div className="bg-gray-100 md:m-12">
            {/* Map Section */}
            <div className="relative">
                {/* Embed Google Map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093763!2d-122.42335568468722!3d37.77492977975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581514d7bdb1f%3A0x2d8cb8d4cf19c3c8!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1674739647436!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                    className="w-full h-[300px] lg:h-[400px]"
                ></iframe>
            </div>

            {/* Logos Section */}
            <div className="bg-gray-100 py-8 mt-10">
                <div className="container mx-auto flex flex-wrap justify-center items-center space-x-6">
                    {/* Individual Logo */}
                    <img
                        src="/path/to/logo1.png"
                        alt="Petroleum"
                        className="h-16 grayscale hover:grayscale-0 transition"
                    />
                    <img
                        src="/path/to/logo2.png"
                        alt="Station"
                        className="h-16 grayscale hover:grayscale-0 transition"
                    />
                    <img
                        src="/path/to/logo3.png"
                        alt="Vintage"
                        className="h-16 grayscale hover:grayscale-0 transition"
                    />
                    <img
                        src="/path/to/logo4.png"
                        alt="Station"
                        className="h-16 grayscale hover:grayscale-0 transition"
                    />
                </div>
            </div>
        </div>
    )
}
