import React from 'react'
import Slider from "react-slick";


const recommendations = [
    {
        name: "James Gouse",
        role: "Graphic Designer",
        review: "Great Quality! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 5,
        image: "/images/reco.jpg", // Replace with actual image URLs
    },
    {
        name: "Tiana Philips",
        role: "Photographer",
        review: "Amazing Work! Vitae nulla diam in arcu dictum a urna viverra morbi.",
        rating: 5,
        image: "/images/reco.jpg",
    },
    {
        name: "Talan Westervelt",
        role: "Business Man",
        review: "Great Quality! Vitae nulla diam in arcu dictum a urna viverra morbi.",
        rating: 5,
        image: "/images/reco.jpg",
    },
];


const RecommendationCard = ({ name, role, review, rating, image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            {/* Rating */}
            <div className="flex space-x-1 mb-4">
                {Array(rating)
                    .fill(0)
                    .map((_, index) => (
                        <span key={index} className="text-yellow-500 text-lg">★</span>
                    ))}
            </div>
            {/* Review */}
            <p className="text-lg font-semibold mb-2">{review}</p>
            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full border-2 border-gray-200 mb-2"
            />
            {/* Name */}
            <h3 className="font-bold text-gray-800">{name}</h3>
            {/* Role */}
            <p className="text-sm text-gray-600">{role}</p>
        </div>
    );
};


export default function Recomendation() {

    const settings = {
        dots: true, // Adds navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides visible at a time
        slidesToScroll: 1, // Slides to scroll per swipe
        responsive: [
            {
                breakpoint: 1024, // Adjust for tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // Adjust for mobile screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 py-12 md:m-12">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
                Recommendations
            </h2>
            <p className="text-center text-gray-600 mb-12">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor. Do amet sint velit officia consequat.
            </p>
            <div className="m-4 px-4 md:px-12">
                <Slider {...settings} >
                    {recommendations.map((rec, index) => (
                        <div key={index} className="px-2"> {/* Add gap with padding */}
                            <RecommendationCard {...rec} />
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}
