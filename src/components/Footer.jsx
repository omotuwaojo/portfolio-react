import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <div className='flex'> 
      <Link to=""><FaFacebookSquare /></Link>
      <Link to=""><FaWhatsappSquare /></Link>
      <Link to=""><FaLinkedin /></Link>
      <Link to=""><FaLinkedin /></Link>
    </div>
  )
}
