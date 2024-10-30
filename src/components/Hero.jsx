import React from 'react'

export default function Hero() {
  return (
    <div className='font-custom flex justify-center gap-10 m-20'>
        <div >
            <h1 className='text-[38px] font-bold'>Hi, I AM MRJO,<br />Fullstack Developer</h1>
            <p className='mt-5'> Lorem ipsum dolor sit amet  consectetur adipisicing elit. Adipisci a unde rerum quas. <br />Itaque perspiciatis ad temporibus tenetur, eum, fuga molestias, necessitatibusporro <br /> cupiditate voluptate accusantium eligendi quasi nemo ipsum.</p>
             <button className='bg-blue-500 p-2 mt-5 text-sm text-white hover:bg-gray-400'>Download Resume</button>
        </div>
        <div></div>
       
        <div>
            <img src='/images/me.jpg' alt='image' className='w-60 h-60 rounded-full' />
        </div>
    </div>
  )
}
