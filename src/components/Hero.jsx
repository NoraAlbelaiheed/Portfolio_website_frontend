import React from 'react'
import John from '../assets/John.png'

const Hero = () => {
  return (
    <>
    <div className='grid grid-cols-1 justify-center mx-auto my-10 h-[400px] sm:grid-cols-2 py-20'>
    
        <div className=' ml-40 order-2 sm:order-1'>
            <h1 className='font-bold text-black md:text-4xl text-3xl my-3 '>Hi, I am John,
            Creative Technologist
            </h1>
            <p className='text-gray-700 py-5'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className='bg-[#FF6464] text-white w-[170px] rounded-sm py-2 my-3 hover:bg-[#9e4b4b] hover:text-gray-200'>Download Resume</button>
        </div>
        <div className='w-full px-5 ml-40 order-1 sm:order-2'>
            <img src={John} alt="John"  className=''/>
        </div>
    </div>
    </>
  )
}

export default Hero