import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

function Contact() {
  return (
    <div>

      <div className='w-full px-4 sm:px-8 py-16 my-10'>
        <div>
          <h1 className='text-center text-2xl cursor-pointer py-3 font-mono font-bold'>
            <span className='text-white bg-red-500 rounded-lg'>Contact</span>Us
          </h1>

          <div className='flex text-center items-center justify-evenly gap-5 h-[500px] min-h-screen'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-7'>
                <div className='flex justify-around gap-5 sticky'>
                  <input type='text' placeholder='Name' className='text-lg font-normal font-sans border-solid border-red-400 rounded-lg p-2 cursor-pointer outline-none bg-slate-100' />
                  <input type='email' placeholder='Email' className='text-lg font-normal font-sans border-solid border-red-400 rounded-lg p-2 cursor-pointer outline-none bg-slate-100' />
                </div>
                <input type='text' placeholder='Subject' className='text-lg font-normal font-sans border-solid border-red-400 rounded-lg p-2 cursor-pointer outline-none bg-slate-100' />
                <textarea name='' id='' placeholder='Type YOur Massage' className='text-md font-normal h-full font-sans border border-solid border-red-400 rounded-lg p-2 cursor-pointer outline-none bg-slate-100'></textarea>
              </div>
              <button className='text-white bg-red-500 w-[280px] items-center rounded-lg cursor-pointer text-lg font-mono haver:text-black hover:bg-red-700'>Submit</button>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[20px] font-serif cursor-pointer py-8 text-left'>Dynamically underwhelm intergred outsourcing <br /> vai timely models. Rapidiously reconceptualize visionary
                <br />imperatives without</p>
              <h3 className='text-left cursor-pointer text-xl font-sans font-normal'>dailyBlog@gmail.com</h3>
              <p className='text-left cursor-pointer text-xl font-sans font-normal'>+6783674854</p>
              <h3 className='text-left cursor-pointer text-xl font-sans font-normal'>695 Tuener Trace Apt.BCC3G8A4</h3>
              <h2 className='text-left cursor-pointer text-xl font-sans font-normal'>Follow on</h2>
              <div className="flex gap-4 text-2xl cursor-pointer px-4">
                <FaFacebookSquare size={25}
                className='hover:cursor-pointer text-blue-300 hover:text-blue-700 text-xl' />
                <FaYoutube size={25}className='hover:cursor-pointer  hover:text-red-700 text-red-300 text-xl' />
                <FaWhatsapp size={25}className='hover:cursor-pointer hover:text-green-700 text-green-300 text-xl' />
                <FaInstagram size={25}className='hover:cursor-pointer hover:text-red-700 text-red-300 text-xl' />
                <FaLinkedin size={25}className='hover:cursor-pointer hover:text-blue-700 text-blue-300 text-xl' />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
