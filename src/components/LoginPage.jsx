import React, {useState} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as yup from 'yup';
import { yupResolver } from 'mantine-form-yup-resolver';
import { TextInput , MantineProvider , Button ,PasswordInput} from '@mantine/core';
import { useForm } from '@mantine/form';



const loginForm = () => {

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: yupResolver(schema), 
    validateInputOnBlur:true
  });
 


  const url='https://stg.api.contenido.tam.codes/login'

  const { errors, HandleSubmit } = form;

  const handleSubmit= async(values)=>{
      const isValid = await schema.isValid(values);
     if(isValid){
      Axios.post(url, {user:values}).then(
        res => {
          console.log(res.data.status.token)
          Cookies.set("token",res.data.status.token,{ expires: 1 });
        }
    )
    
  }
}

  return (
<MantineProvider>    
<div >
        <div className='grid place-items-center grid-cols-1 md:grid-cols-2 gap-0 w-[1100px] mx-auto pt-6 '>
            <div className='w-[50%] md:w-[100%] bg-background h-[250px] md:h-[500px] rounded-md md:rounded-l-md md:rounded-r-none flex justify-center'>
                <h1 className=' w-[400px] text-5xl text-white font-bold pt-[100px] md:pt-[200px]'>Welcome Back!</h1>
            </div>

            <div className='w-[50%] md:w-[100%] bg-white h-[500px] rounded-md md:rounded-r-md md:rounded-l-none flex flex-col items-center'>
                <h1 className='pt-[70px] text-4xl  font-semibold'> Login</h1>
                <p className='my-5 text-gray-300'>Welcome back, please login into your account</p>
                <form action="" onSubmit={form.onSubmit((values)=>handleSubmit(values))} >
                    <div className='flex flex-col items-center'>
                    
                    <TextInput label='Email' placeholder='example@mail.com' className='rounded-md my-4 w-[320px] h-[30px] pl-2 focus: outline-none  ' {...form.getInputProps('email')}  
                    />
                    <PasswordInput label='Password' type='password' className='rounded-md mt-8 mb-4 w-[320px] h-[30px] pl-2 focus: outline-none  ' {...form.getInputProps('password')} />
                    <br />
                    </div>
                    <div className=' grid grid-cols-2 w-[530px] mx-auto my-5'>
                        <div className='flex items-center w-[150px] justify-center ml-[100px] md:ml-[100px]'>
                             <input type="checkbox" id='rememberMe' className=' w-[15px] h-[15px] rounded-sm '/>
                             <label htmlFor="rememberMe" className='mx-2  text-sm text-gray-800'>Remember me</label>
                        </div>
                        <button className='text-sm text-gray-400 w-[200px] pr-9'>Forget Password?</button>
                    </div>
                        <Button type='submit' className='text-white bg-purple-800 rounded-md py-3  ml-[110px] w-[320px]'>Submit</Button>
                </form>
                <div className=' grid grid-cols-2 my-4 '>
                    <p className='text-sm text-gray-400'>New User?</p>
                    <Link to='/register' className='text-purple-600 text-sm mx-2'>Sign up</Link >
                </div>
            </div>
        </div>
    </div>
    </MantineProvider>
  )
}

export default loginForm;