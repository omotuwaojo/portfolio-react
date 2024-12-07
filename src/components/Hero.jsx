import React, { useEffect, useRef } from 'react';
import { Typed } from "react-typed";
import { FaArrowRight }from 'react-icons/fa';

export default function Hero() {

   // Create a ref for the element where the Typed effect will happen
   const typedRef = useRef(null);

   useEffect(() => {
     // Initialize Typed on the ref element when component is mounted
     if (typedRef.current) {
       new Typed(typedRef.current, {
         strings: ['Fullstack Developer', 'React Enthusiast', 'Problem Solver'],
         typeSpeed: 50,
         backSpeed: 30,
         loop: true,
       });
     }
   }, []);

  return (
    <div className="animate__animated animate__fadeInLeft font-custom flex flex-col-reverse lg:flex-row items-center justify-center gap-10 m-10 lg:m-20">
    {/* Text Section */}
    <div className="text-center lg:text-left">
      <h1 className="text-3xl lg:text-5xl font-bold animate__animated animate__fadeInDown">
        I'm Omotuwa Ojo<br />
        <span className="text-blue-500">
         {/* Set ref to this span element */}
            <span ref={typedRef}></span>
        </span>
      </h1>
      <p className="mt-4 text-sm lg:text-base font-normal animate__animated animate__fadeInUp animate__delay-1s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a unde rerum quas. <br />
        Itaque perspiciatis ad temporibus tenetur, eum, fuga molestias, necessitatibus porro <br />
        cupiditate voluptate accusantium eligendi quasi nemo ipsum.
      </p>
      <div className="flex justify-center lg:justify-start">
        <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 mt-6 text-sm lg:text-base text-white rounded-md hover:bg-blue-600 transition duration-300 animate__animated animate__zoomIn animate__delay-2s">
          HIRE ME
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  
    {/* Image Section */}
    <div className="animate__animated animate__fadeInRight md:order-first lg:order-none">
      <img
        src="/images/me.jpg"
        alt="Omotuwa Ojo"
        className="w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover"
      />
    </div>
  </div>
  
  )
}
