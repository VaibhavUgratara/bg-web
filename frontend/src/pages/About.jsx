import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='w-full py-10 '>
      <h1 className='text-3xl text-center font-serif font-semibold cursor-pointer text-red-400 '>About</h1>
      <p className=' text-lg text-center font-serif font-medium cursor-pointer'>We help folks love LOrem ipsum doler sit amet.Lorem <br /> ipus dolor sit amet,consectetur adipisicing</p>
      <div className=' flex gap-20  my-16 h-[500px] items-center justify-center'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl text-left font-mono font-semibold cursor-pointer py-6'>We're here get as many people <br /> <span className='text-red-500'>moving</span> as possible</h2>

          <p className=' text-lg text-left font-sans font-normal cursor-pointer'>Not just people we are already fix our Problem.Lorem ipsum dolor{" "} <br /> sit amet consectetur adipisicing elit. consectetur sunt doloribus ex <br/> maiores cupiditate nemo? Atque nostrum maiores eaque! Iure! Lorem{" "} <br/> ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt <br/> doloribus ex maiores cupiditate nemo? Atque nostrum maiores eaque! {" "}<br/> Iure!</p>
          <p className=' text-lg text-left font-sans font-normal cursor-pointer'> follow us on social midia</p>
        </div>
        <div className='flex flex-col gap-5'>
          <img className='h-[240px] w-[400px]' 
          src='https://tse3.mm.bing.net/th?id=OIP.5SpiZaSKHMw7eE75gJlLgwHaFy&pid=Api&P=0&h=180' alt='' />
          <img className='h-[240px] w-[400px]'
          src='https://tse4.mm.bing.net/th?id=OIP.DbX7yJSK0xlsBIRA-4esmwHaEW&pid=Api&P=0&h=180' alt='' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <button className='text-white bg-red-400 w-[180px] h-[40px] items-center rounded-lg cursor-pointer text-xl font-mono hover:text-black hover:bg-red-600'>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  )
}
