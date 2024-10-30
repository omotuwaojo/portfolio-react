import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <div className='flex'> 
      <Link to=""><FaFacebookSquare /></Link>
    </div>
  )
}
