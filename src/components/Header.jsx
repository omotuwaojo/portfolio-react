import React from 'react'

export default function Header() {
  return (
    <div className='bg-white flex justify-around py-6 shadow-md'>
        <div>
            <h2 className='font-bold text-[20px]'>MRJO</h2>
            </div>
        <div className='flex '>
            <a href='' className='mx-4 font-semibold hover:text-red-600'>Home</a>
            <a href='' className='mx-4 hover:text-red-600'>About</a>
            <a href='' className='mx-4 hover:text-red-600'>Project</a>
            <a href='' className='mx-4 hover:text-red-600'>Skills</a>
            <a href='' className='mx-4 hover:text-red-600'>Contact</a>
        </div>
    </div>
  )
}
