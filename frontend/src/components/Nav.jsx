import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa"

export default function Nav() {
  return (
    <div className=' w-full bg-black fixed top-0 left-0 right-0 z-10 '>
      <div className='max-w-full lg:max-w-screen-2xl mx-auto px-4 py-1 text-white border border-yellow-500' >
        <nav className='flex flex-row justify-between items-center '>
          <div className=' text-2xl font-bold font-mono cursor-pointer'>
            <Link to="/">
              Daily<span className='text-red-500'>Blog</span></Link>
          </div>
          <div>
            <div className='flex gap-6'>
              <Link to="/" className=' text-white cursor-pointer hover:text-red-400 font-semibold hover:underline hover:underline-offset-1'>Home</Link>
              <Link to="/about" className=' text-white cursor-pointer hover:text-red-400 font-semibold hover:underline hover:underline-offset-1'>About</Link>
              <Link to="/blogs" className=' text-white cursor-pointer hover:text-red-400 font-semibold hover:underline hover:underline-offset-1'>Blogs</Link>
              <Link to="/contact" className=' text-white cursor-pointer hover:text-red-400 font-semibold hover:underline hover:underline-offset-1'>Contact</Link>
              <Link to="/login" className=' text-white cursor-pointer hover:text-red-400 font-semibold hover:underline hover:underline-offset-1'>Login</Link>
            </div>
          </div>
          <div className='flex py-2 gap-4 text-white'>
            <FaFacebookSquare className='hover:cursor-pointer text-blue-300 hover:text-blue-700 text-xl' />
            <FaYoutube className='hover:cursor-pointer  hover:text-red-700 text-red-300 text-xl' />
            <FaWhatsapp className='hover:cursor-pointer hover:text-green-700 text-green-300 text-xl' />
            <FaInstagram className='hover:cursor-pointer hover:text-red-700 text-red-300 text-xl' />
            <FaLinkedin className='hover:cursor-pointer hover:text-blue-700 text-blue-300 text-xl' />
          </div>
        </nav>
      </div>
    </div>
  )
}
