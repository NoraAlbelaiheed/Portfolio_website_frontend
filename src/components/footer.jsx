import React from 'react'
import {
    FaInstagram,
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
} from 'react-icons/fa'

const footer = () => {
  return (
    <div>
        <div className='mx-auto flex justify-between w-[200px] pt-20'>
            <FaFacebookSquare size={35}/>
            <FaInstagram size={35}/>
            <FaTwitterSquare size={35}/>
            <FaLinkedin size={35}/>
        </div>
        <div className='flex justify-center '>
        <p className='py-5 text-[#21243D]  text-sm'>Copyright ©2020 All rights reserved </p>
        </div>
    </div>
  )
}

export default footer