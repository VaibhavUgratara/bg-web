import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-black w-full text-white ">
    <div className="w-full px-4 py-12 border border-yellow-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {/* Logo & About */}
            <div>
              <h1 className="text-2xl font-mono font-semibold mb-2 bottom-0">
                <Link to="/">
                  Daily<span className="text-red-500">Blog</span>
                </Link>
              </h1>
              <p className="text-sm font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos exercitationem voluptates possimus, ut illum est ipsa quisquam ea?
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
              <ul className="space-y-1">
                <li><Link to="/" className="hover:text-red-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-red-400">About</Link></li>
                <li><Link to="/blogs" className="hover:text-red-400">Blogs</Link></li>
                <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-red-400">Privacy</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Categories</h2>
              <ul className="space-y-1">
                <li className="hover:text-red-500">Technology</li>
                <li className="hover:text-red-500">AI</li>
                <li className="hover:text-red-500">Education</li>
                <li className="hover:text-red-500">Daily Blogs</li>
                <li className="hover:text-red-500">Funny Blogs</li>
                <li className="hover:text-red-500">Sports</li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Get Blog Articles</h4>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-200 rounded-lg h-10 px-4 text-black mb-2 outline-none"
              />
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
                Subscribe
              </button>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Follow us</h2>
                <div className="flex gap-4 text-2xl cursor-pointer px-4">
                  <FaFacebookSquare className='hover:cursor-pointer text-blue-300 hover:text-blue-700 text-xl' />
                  <FaYoutube className='hover:cursor-pointer  hover:text-red-700 text-red-300 text-xl' />
                  <FaWhatsapp className='hover:cursor-pointer hover:text-green-700 text-green-300 text-xl' />
                  <FaInstagram className='hover:cursor-pointer hover:text-red-700 text-red-300 text-xl' />
                  <FaLinkedin className='hover:cursor-pointer hover:text-blue-700 text-blue-300 text-xl' />
               
              </div>
            </div>

          </div>
        </div>
      </div>
      <p className='w-full bg-gray-700 text-center text-[18px] font-serif font-thin p-4text-white'>&copy;right with me . design by projectWithme !</p>
    </div>
  );
}

export default Footer;
