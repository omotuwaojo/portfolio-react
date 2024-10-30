import React from 'react'

export default function Post() {
  return (
    <section className='font-custom bg-blue-400'>
      <div className='flex justify-around py-5'>
        <div className='font-semibold text-sm'>Recent Post</div>
        <div className='font-semibold text-sm text-lightblue-400'>View All</div>
      </div>

      <div className='flex flex-col justify-center md:flex-row gap-6 p-5'>
        <div className='flex-1 max-w-sm p-5  bg-white rounded-lg shadow-md overflow-hidden'>
          <h1 className='text-2xl font-bold  text-gray-800 mb-5'>Making a design system from scratch</h1>


          <div className="flex items-center text-gray-500 text-sm font-semibold mb-5">
            <span>October 25, 2024</span>
            <span class="mx-2 border-l border-gray-300 h-4"></span>
            <span>Design,Pattern</span>
          </div>


          <p className='text-gray-600 text-sm mb-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div className='flex-1 max-w-sm p-5 bg-white rounded-lg shadow-md overflow-hidden'>
          <h1 className='text-2xl font-bold text-gray-800 mb-5'>Creating pixel perfect icons in Figma</h1>

          <div className="flex items-center text-gray-500 text-sm font-semibold mb-5">
            <span>October 25, 2024</span>
            <span class="mx-2 border-l border-gray-300 h-4"></span>
            <span>Figma, Icon Design</span>
          </div>

          <p className='text-gray-600 text-sm mb-2'>met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </section>
  )
}
