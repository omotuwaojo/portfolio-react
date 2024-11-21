import React from 'react'
import { FaArrowRight }
  from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='font-custom flex justify-center gap-10 m-20'>
      <div >
        <h1 className='text-[48px] font-bold'>I'm Omotuwa Ojo<br /><span className='text-blue-500'>Fullstack Developer</span></h1>
        <p className='mt-2 font-normal text-[16px]'> Lorem ipsum dolor sit amet  consectetur adipisicing elit. Adipisci a unde rerum quas. <br />Itaque perspiciatis ad temporibus tenetur, eum, fuga molestias, necessitatibusporro <br /> cupiditate voluptate accusantium eligendi quasi nemo ipsum.</p>
        <button className='flex items-center space-x-2 px-4 py-2 bg-blue-500 p-2 mt-5 text-[16px] text-white rounded-md hover:bg-blue-600 transition duration-300'>HIRE ME
          <FaArrowRight className="m-1 w-5 h-5" />
        </button>
      </div>
      <div></div>

      <div>
        <img src='/images/me.jpg' alt='image' className='w-60 h-60 rounded-full' />
      </div>
    </div>
  )
}
