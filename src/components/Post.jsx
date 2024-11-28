import React from 'react'

// export default function Post() {
//   return (
//     <section className='font-custom bg-blue-400'>
//       {/* <div className='flex justify-around py-5'>
//         <div className='font-semibold text-sm'>Recent Post</div>
//         <div className='font-semibold text-sm text-lightblue-400'>View All</div>
//       </div>

//       <div className='flex flex-col justify-center md:flex-row gap-6 p-5'>
//         <div className='flex-1 max-w-sm p-5  bg-white rounded-lg shadow-md overflow-hidden'>
//           <h1 className='text-2xl font-bold  text-gray-800 mb-5'>Making a design system from scratch</h1>


//           <div className="flex items-center text-gray-500 text-sm font-semibold mb-5">
//             <span>October 25, 2024</span>
//             <span class="mx-2 border-l border-gray-300 h-4"></span>
//             <span>Design,Pattern</span>
//           </div>


//           <p className='text-gray-600 text-sm mb-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
//         </div>

//         <div className='flex-1 max-w-sm p-5 bg-white rounded-lg shadow-md overflow-hidden'>
//           <h1 className='text-2xl font-bold text-gray-800 mb-5'>Creating pixel perfect icons in Figma</h1>

//           <div className="flex items-center text-gray-500 text-sm font-semibold mb-5">
//             <span>October 25, 2024</span>
//             <span class="mx-2 border-l border-gray-300 h-4"></span>
//             <span>Figma, Icon Design</span>
//           </div>

//           <p className='text-gray-600 text-sm mb-2'>met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
//         </div>
//       </div> */}
//       <div className='just py-5'>
//        <div className='font-semibold text-xl '>  <h1>My Services</h1></div> 
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Hic minima eos blanditiis dolor voluptatibus sint debitis nulla, nemo id? Quo?</p>
//       </div>
//     </section>
//   )
// }

import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase, FaCloud, FaChartLine } from "react-icons/fa";

const services = [
  { title: "Web Development", icon: <FaCode />, description: "Building responsive and scalable websites." },
  { title: "Graphic Design", icon: <FaPaintBrush />, description: "Creating stunning visuals and branding." },
  { title: "Mobile Development", icon: <FaMobileAlt />, description: "Developing user-friendly mobile apps." },
  { title: "Database Management", icon: <FaDatabase />, description: "Efficient database solutions." },
  { title: "Cloud Services", icon: <FaCloud />, description: "Secure cloud-based infrastructure." },
  { title: "SEO Optimization", icon: <FaChartLine />, description: "Boosting your website's visibility." },
];

export default function Post() {
  return (
    <div className="bg-gray-100 py-12 md:m-12 ">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-5">My Services</h2>
      <p className="text-center text-gray-600 mt-2 px-4 md:px-12 lg:px-48 mb-5">
        Explore a wide range of services tailored to meet your needs. From web development to cloud solutions, <br />
        our offerings are designed to help you achieve your goals efficiently and effectively.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


