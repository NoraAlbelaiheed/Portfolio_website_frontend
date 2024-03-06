import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {NavLink } from 'react-router-dom';
import App from '../App';
import BlogsPage from '../routes/blogsPage'
import WorkDetail from '../routes/workDetail'
import Works from '../routes/works'
import Home from './Home'

const Navbar = () => {
 const [navbar,SetNavBar] = useState(false)

 function handleNavBar(){
    SetNavBar(!navbar)
 }
  return (
    <div className='flex w-full'>
        <div className='font-medium md:flex ml-auto mr-5 my-3 hidden'>
          <nav>
            <NavLink to='/' className='active:text-[#FF6464] mx-2'>Home</NavLink>
            <NavLink to='/works' className='active:text-[#FF6464] mx-2'>Works</NavLink>
            <NavLink to='/blogs' className='active:text-[#FF6464] mx-2'>Blogs</NavLink>
            <NavLink to='/' className='active:text-[#FF6464] mx-2'>Contact</NavLink>
            </nav>
        </div>
        <div className='block md:hidden ml-auto' onClick={handleNavBar}>
                {navbar ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
            </div>
            <div className={navbar ? 'fixed bg-gray-300 border border-r-gray-200 w-[30%] h-screen ease-in-out duration-600 md:hidden':'fixed left-[-100%] bg-gray-300 ease-in-out duration-700 '}>
              <ul className='py-5 text-xl px-3'>
              
              <li> <NavLink to='/' className='active:text-[#FF6464] mx-2'>Home</NavLink></li>
              <li> <NavLink to='/works' className='active:text-[#FF6464] mx-2'>Works</NavLink></li>
              <li><NavLink to='/blogs' className='active:text-[#FF6464] mx-2'>Blogs</NavLink></li>
              <li><NavLink to='/' className='active:text-[#FF6464] mx-2'>Contact</NavLink></li>
            
              </ul>
            </div>
    </div>
  )
}

export default Navbar