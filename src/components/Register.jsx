import Axios from 'axios';
import React, { useState } from 'react'

const RegisterForm = () => {
    const[data , setData]=useState({
        firstName:'',
        lastname:'',
        email:'',
        password:'',
        phone:'',
        birthdate:'',
    })

    function HandleDate(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
    }

    function submit(e){

        e.preventDefault();
        Axios.post('https://jsonplaceholder.typicode.com/posts',
        {data}
        ).then(res=>{console.log(res.data)})

    }

  return (
    <div>
        <div className='grid md:grid-cols-2 gap-0 w-[1100px] mx-auto pt-6 grid-cols-1'>
        <div className='w-[50%] md:w-[100%] bg-background h-[250px] md:h-[700px] rounded-md md:rounded-l-md md:rounded-r-none flex justify-center'>
                <h1 className=' w-[400px] text-4xl md:text-6xl text-white font-bold pt-[100px] md:pt-[200px]'>Welcome!</h1>
            </div>
        <div className='w-[50%] md:w-[100%] bg-white h-[700px] rounded-md md:rounded-r-md md:rounded-l-none flex flex-col items-center '>
            <h1 className='text-black font-semibold text-3xl py-5'>Sign up</h1>
            <p className='my-3 text-gray-300'>Sign up by entering your information below</p>
            <form action="" onSubmit={(e)=>submit(e)}>
                <div className='flex flex-col items-center'>
                    <h6 className='mr-[250px]'>First name :</h6>
                    <input onChange={(e)=>HandleDate(e)} type="text" className='rounded-md my-2 w-[330px] py-1 pl-2 focus: outline-none bg-gray-100' id='firstName' value={data.firstName} />
                    <h6 className='mr-[250px]'>Last name :</h6>
                    <input onChange={(e)=>HandleDate(e)} type="text"className='rounded-md my-2  w-[330px] py-1 pl-2 focus: outline-none bg-gray-100' id='lastname' value={data.lastname} />
                    <h6 className='mr-[280px]'>Email :</h6>
                    <input onChange={(e)=>HandleDate(e)} type="text"className='rounded-md my-2  w-[330px] py-1 pl-2 focus: outline-none bg-gray-100' id='email'value={data.email}/>
                    <h6 className='mr-[250px]'>Password :</h6>
                    <input onChange={(e)=>HandleDate(e)} type="text"className='rounded-md my-2  w-[330px] py-1 pl-2 focus: outline-none bg-gray-100' id='password'value={data.password} />
                    <h6 className='mr-[210px]'>Phone number :</h6>
                    <input onChange={(e)=>HandleDate(e)} type="number"className='rounded-md my-2  w-[330px] py-1 pl-2 focus: outline-none bg-gray-100' id='phone'value={data.phone}/>
                    <h6 className='mr-[250px]'>Birth date :</h6>
                    <input onChange={(e)=>HandleDate(e)} type="date"className='rounded-md my-2  w-[330px] py-1 pl-2  pr-2 focus: outline-none bg-gray-100' id='birthdate'value={data.birthdate} />
                </div>
                <div className='flex items-center w-[250px] justify-center ml-[-15px] mt-5'>
                             <input type="checkbox" id='rememberMe' className=' w-[15px] h-[15px] rounded-sm '/>
                             <label htmlFor="rememberMe" className='mx-2  text-sm text-gray-800 '>Agree on <span className='text-purple-600 '>Terms & Conditions</span></label>
                        </div>
                <input type="submit" className='rounded-md text-white bg-purple-800 py-2 w-[330px] my-5'/>
            </form>
        </div>
        </div>
    </div>
  )
}

export default RegisterForm