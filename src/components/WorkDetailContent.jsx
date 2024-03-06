import React from 'react'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'

const WorkDetailContent = () => {
  return (
    <div>
        <h1 className='font-bold text-xl md:text-2xl flex flex-row justify-center text-black my-10 w-full pt-5'>Designing Dashboards with usability in mind</h1>
            <div>
                <div className='flex flex-row justify-center mr-[180px]'>
                    <button className='rounded-md text-white bg-[#FF7C7C] w-[50px] ' >2022</button>
                    <h3 className='text-black mx-4'>Dashboard, User experince design</h3>
                </div>
                <p className='mx-auto w-[500px] text-sm pt-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                 <img src={pic5} alt="" className='w-[500px] mx-auto my-10'/>
                 <h1 className='mx-auto w-[500px] font-bold text-xl pt-5'>Heading</h1>
                 <h2 className='mx-auto w-[500px] font-bold pt-5'>Heading</h2>
                 <p className='mx-auto w-[500px] text-sm pt-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <img src={pic6} className="w-[500px] mx-auto my-10" />
                <img src={pic7} className="w-[500px] mx-auto my-10" />
            </div>
    </div>
  )
}

export default WorkDetailContent