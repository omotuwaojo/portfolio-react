import React from 'react'

export default function Feature() {
    return (
        <section >
            <div className='flex justify-center py-5'>
                <h1 className='font-semibold text-xl justify-start'>Future Projects</h1>
            </div>
            <div className="font-custom max-w-3xl mx-auto bg-white rounded-lg p-4  overflow-hidden flex flex-col md:flex-row">

                <div className="md:w-1/2">
                    <img class="w-80   " src="/images/Rectangle 30.png" alt="Feature Post Image" />
                </div>
                <div className="p-4  flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Quiz Bot</h2>
                    {/*  */}
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span>October 25, 2024</span>
                        <span className="mx-2 border-l border-gray-300 h-4"></span>
                        <span>Tech</span>
                    </div>
                    <p class="text-gray-600 text-base mb-6">
                        This is a project for students to complete that quizs on a websites the project amis to assist students, works to help in quiz complition and give answer to quizes 
                    </p>
                    <span className="mx-3 border-b border-gray-300 h-4"></span>
                </div>

            </div>
            <div className="font-custom max-w-3xl mx-auto bg-white rounded-lg p-4  overflow-hidden flex flex-col md:flex-row">

                <div className="md:w-1/2">
                    <img class="w-80   " src="/images/Rectangle 34.png" alt="Feature Post Image" />
                </div>
                <div className="p-4  flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Fish Dectection App</h2>
                    {/*  */}
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span>October 25, 2024</span>
                        <span className="mx-2 border-l border-gray-300 h-4"></span>
                        <span>Tech</span>
                    </div>
                    <p class="text-gray-600 text-base mb-6">
                        This project aims is to help dectect fish a an area in the rivers, oceans and sea. it tell if fish are in particuler areas.  
                    </p>
                    <span className="mx-3 border-b border-gray-300 h-4"></span>
                </div>

            </div>
            <div className="font-custom max-w-3xl mx-auto bg-white rounded-lg p-4  overflow-hidden flex flex-col md:flex-row">

                <div className="md:w-1/2">
                    <img class="w-80   " src="/images/Rectangle 32.png" alt="Feature Post Image" />
                </div>
                <div className="p-4  flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Hotel recommendation system </h2>
                    {/*  */}
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span>October 25, 2024</span>
                        <span className="mx-2 border-l border-gray-300 h-4"></span>
                        <span>Tech</span>
                    </div>
                    <p class="text-gray-600 text-base mb-6">
                        This project helps user to locate hotels in area particular areas and even suggest to the user based on the preffrences and location are the user profile. 
                    </p>
                    <span className="mx-3 border-b border-gray-300 h-4"></span>
                </div>

            </div>
        </section>


    )
}
