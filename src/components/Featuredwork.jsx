import React from 'react'
import DesignDashPic from '../assets/DesignDashPic.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import { useState } from 'react'



const Featuredwork = () => {
    const [picAvailabilty ,setPicAvailabilty]=useState(true)
   
  return (
    <>
            <div className='mx-auto md:ml-20 py-5'>
            <h1 className='text-xl md:text-2xl'>Featured works</h1>
             </div>
         <div>
            <div className='grid md:grid-cols-2 py-5 grid-cols-1'>
                <img src={DesignDashPic} alt="" className='w-[300px] md:w-[190px] md:ml-20 rounded-sm mx-auto'/>
                <div className='md:ml-[-340px] md:mr-[80px] pb-2 mx-auto'>
                    <h1 className='font-bold text-3xl'>Designing Dashboards</h1>
                    <div className='grid grid-cols-2  w-[40%] py-4'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2022</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Dashboard</h1>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                       
                    </div>
                </div>
                <div className='border-b border-gray-300 w-[1100px] mx-auto'>  </div>
            </div>

            <div className='grid md:grid-cols-2 py-5 grid-cols-1'>
                <img src={pic2} alt="" className='w-[300px] md:w-[190px] md:ml-20 rounded-sm mx-auto'/>
                <div className='md:ml-[-340px] md:mr-[80px] mx-auto'>
                    <h1 className='font-bold text-3xl pb-2'>Vibrant Portraits of 2020</h1>
                    <div className='grid grid-cols-2 w-[40%] py-4'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2018</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Illustration</h1>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className='border-b border-gray-300 w-[1100px] mx-auto'> </div>


            <div className='grid md:grid-cols-2 py-5 grid-cols-1'>
                <img src={pic3} alt="" className='w-[300px] md:w-[190px] md:ml-20 rounded-sm mx-auto'/>
                <div className='md:ml-[-340px] md:mr-[80px] '>
                    <h1 className='font-bold text-3xl pb-2'>36 Days of Malayalam type</h1>
                    <div className='grid grid-cols-2  py-4 w-[40%]'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2018</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Typography</h1>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <div className='border-b border-gray-300 w-[1100px] mx-auto'> </div>

    </>
  )
}

export default Featuredwork