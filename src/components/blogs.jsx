import React from 'react'
import { NavLink } from 'react-router-dom';

const blogs = () => {
  return (
    <div className='mx-auto'>
        <div>
         <h1 className='text-3xl md:text-4xl font-bold md:ml-[280px] py-10'>Blog</h1>
          <div className='mx-auto grid-cols-1 w-[700px] '>
            <div>
            <NavLink to='/blogs/article' className=' text-2xl'>Designing Dashboards</NavLink>
            <div className='grid grid-cols-2  py-4'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2022</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Dashboard</h1>
                    </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio dolores veniam molestias, obcaecati quis quo eligendi vel magnam atque eum possimus animi similique nobis fugiat iste quod quae deleniti.
            </p>
            <dir className='border-b border-gray-300'></dir>
            </div>
          </div>
          <div className='mx-auto grid-cols-1 w-[700px] py-2 '>
            <div>
            <h1 className='text-2xl'>Designing Dashboards</h1>
            <div className='grid grid-cols-2  py-4'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2022</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Dashboard</h1>
                    </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio dolores veniam molestias, obcaecati quis quo eligendi vel magnam atque eum possimus animi similique nobis fugiat iste quod quae deleniti.
            </p>
            <dir className='border-b border-gray-300'></dir>
            </div>
          </div>

          <div className='mx-auto grid-cols-1 w-[700px] py-2 '>
            <div>
            <h1 className='text-2xl'>Designing Dashboards</h1>
            <div className='grid grid-cols-2  py-4'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2022</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Dashboard</h1>
                    </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio dolores veniam molestias, obcaecati quis quo eligendi vel magnam atque eum possimus animi similique nobis fugiat iste quod quae deleniti.
            </p>
            <dir className='border-b border-gray-300'></dir>
            </div>
          </div>

          <div className='mx-auto grid-cols-1 w-[700px] py-2 '>
            <div>
            <h1 className='text-2xl'>Designing Dashboards</h1>
            <div className='grid grid-cols-2  py-4'>
                        <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>2022</button>
                        <h1 className='text-gray-400 md:ml-[-100px]'>Dashboard</h1>
                    </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio dolores veniam molestias, obcaecati quis quo eligendi vel magnam atque eum possimus animi similique nobis fugiat iste quod quae deleniti.
            </p>
            <dir className='border-b border-gray-300'></dir>
            </div>
          </div>
          </div>
    </div>
  )
}

export default blogs