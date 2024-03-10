import React, {useState} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

const loginForm = () => {
  const [data, setData]=useState({

    email:'',
    password:'',

  }
  )

  const url='https://jsonplaceholder.typicode.com/posts'
  function submit(e){
    e.preventDefault();
    Axios.post(url, data).then(
        res => {console.log(res.data)}
    )

  }

  function HandleDate(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)

  }

  return (
    <div >
        <div className='grid place-items-center grid-cols-1 md:grid-cols-2 gap-0 w-[1100px] mx-auto pt-6 '>
            <div className='w-[50%] md:w-[100%] bg-background h-[250px] md:h-[500px] rounded-md md:rounded-l-md flex justify-center'>
                <h1 className=' w-[400px] text-5xl text-white font-bold pt-[100px] md:pt-[200px]'>Welcome Back!</h1>
            </div>

            <div className='w-[50%] md:w-[100%] bg-white h-[500px] rounded-md md:rounded-r-md md:rounded-l-noneflex flex-col items-center'>
                <h1 className='pt-[70px] text-4xl ml-[80px] font-semibold'> Login</h1>
                <p className='ml-[80px] my-5 text-gray-300'>Welcome back, please login into your account</p>
                <form action="" onSubmit={(e)=>submit(e)} >
                    <div className='flex flex-col items-center'>
                    <h5 className='mr-[340px]'>Email :</h5>
                    <input type="text" onChange={(e)=>HandleDate(e)} value={data.email} className=' rounded-md my-2 w-[320px] h-[30px] pl-2 focus: outline-none bg-gray-100 mr-[70px]' placeholder='Example@mail.com' id='email'/>
                    <h5 className='mr-[310px]'>Password :</h5>
                    <input type="password" onChange={(e)=>HandleDate(e)} value={data.password} className=' rounded-md my-2 w-[320px] h-[30px] pl-2 focus: outline-none bg-gray-100 mr-[70px]' id='password'/>
                    <br />
                    </div>
                    <div className=' grid grid-cols-2 w-[530px] mx-auto my-5'>
                        <div className='flex items-center w-[150px] justify-center ml-[60px]'>
                             <input type="checkbox" id='rememberMe' className=' w-[15px] h-[15px] rounded-sm '/>
                             <label htmlFor="rememberMe" className='mx-2  text-sm text-gray-800'>Remember me</label>
                        </div>
                        <button className='text-sm text-gray-400 w-[200px] pr-9'>Forget Password?</button>
                    </div>
                        <input type="submit" className='text-white bg-purple-800 rounded-md py-3 w-[335px] ml-[80px]' />
                </form>
                <div className='flex ml-[80px] my-4 '>
                    <p className='text-sm text-gray-400'>New User?</p>
                    <Link to='/register' className='text-purple-600 text-sm mx-2'>Sign up</Link >
                </div>
            </div>
        </div>
    </div>
  )
}

export default loginForm