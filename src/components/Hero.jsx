import React from 'react'
import { FaArrowRight }
  from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="font-custom flex flex-col-reverse lg:flex-row items-center justify-center gap-10 m-10 lg:m-20">
    {/* Text Section */}
    <div className="text-center lg:text-left">
      <h1 className="text-3xl lg:text-5xl font-bold">
        I'm Omotuwa Ojo<br />
        <span className="text-blue-500">Fullstack Developer</span>
      </h1>
      <p className="mt-4 text-sm lg:text-base font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a unde rerum quas. <br />
        Itaque perspiciatis ad temporibus tenetur, eum, fuga molestias, necessitatibus porro <br />
        cupiditate voluptate accusantium eligendi quasi nemo ipsum.
      </p>
      <div className="flex justify-center lg:justify-start">
        <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 mt-6 text-sm lg:text-base text-white rounded-md hover:bg-blue-600 transition duration-300">
          HIRE ME
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  
    {/* Image Section */}
    <div className="md:order-first lg:order-none">
      <img
        src="/images/me.jpg"
        alt="Omotuwa Ojo"
        className="w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover"
      />
    </div>
  </div>
  
  )
}
