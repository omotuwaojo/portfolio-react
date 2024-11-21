import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='font-custom bg-white flex justify-around py-6 shadow-md'>
      <div>
        <h2 className='font-bold text-[20px]'>MRJO</h2>
      </div>
      <div className='flex '>

        <Link to="/" className='mx-4 font-semibold hover:text-red-600'> Home</Link>
        <Link to="/about" className='mx-4 font-semibold hover:text-red-600'> About</Link>
        <Link to="/skils" className='mx-4 font-semibold hover:text-red-600'>Skils</Link>
        <Link to="/contact" className='mx-4 font-semibold hover:text-red-600'> Contact</Link>
        <Link to="/Project" className='mx-4 font-semibold hover:text-red-600'>Project</Link>
      </div>
    </div>
  )
}
