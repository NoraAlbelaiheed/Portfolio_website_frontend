import Axios from 'axios';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import * as yup from 'yup';
import { yupResolver } from 'mantine-form-yup-resolver';
import { TextInput ,Text, MantineProvider , Button ,PasswordInput} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';



const RegisterForm = () => {

 const schema =yup.object().shape({
        email:yup.string().email('invalid email format').required('this field is required'),
        phone_number: yup.number().required('this field is required'),
        password:yup.string('must not include numbers').min(8,'Password must be at least 8 characters').required('Password is required'),
        first_name:yup.string('must not include numbers').required('this field is required'),
        middle_name:yup.string('must not include numbers').required('this field is required'),
        last_name:yup.string('must not include numbers').required('this field is required'),
        gender:'',
        birth_date:'',
    })
 
    const form =useForm({

        initialValues:{
            email:'',
            phone_number:'',
            password:'',
            first_name:'',
            middle_name:'',
            last_name:'',
            gender:'',
            birth_date:'',
        },
        validate:yupResolver(schema),
        validateInputOnBlur:true
        
    });
    const handleSubmit = async(values)=>{
        const isValid =  await schema.isValid(values);
        if(isValid){
            Axios.post('https://stg.api.contenido.tam.codes/signup',
           {user:values}
           ).then(res=>{console.log(res.user)})
        }

    }
    

    function HandlePhone(val){
        if(val.length<12){
            setIsValid(false);
        }
        else{
        setIsValid(true)
        val='00'+val;
        const newData={...user}
        newData['phone_number']=val
        setData(newData)
        
        }
        
      }

  return (
    <MantineProvider>
    <div>
        <div className='grid md:grid-cols-2 gap-0 w-[1100px] mx-auto pt-6 grid-cols-1'>
        <div className='w-[50%] md:w-[100%] bg-background h-[250px] md:h-[800px] rounded-md md:rounded-l-md md:rounded-r-none flex justify-center'>
                <h1 className=' w-[400px] text-4xl md:text-6xl text-white font-bold pt-[100px] md:pt-[200px]'>Welcome!</h1>
            </div>
        <div className='w-[50%] md:w-[100%] bg-white h-[800px] rounded-md md:rounded-r-md md:rounded-l-none flex flex-col items-center '>
            <h1 className='text-black font-semibold text-3xl py-5'>Sign up</h1>
            <p className='my-3 text-gray-300'>Sign up by entering your information below</p>
            <form action="" onSubmit={form.onSubmit((values)=>handleSubmit(values))}>
                <div className='flex flex-col items-center'>
                    <TextInput label='First Name' className='rounded-md my-2 w-[330px] py-1 pl-2 focus: outline-none ' {...form.getInputProps('first_name')}/>
                   <TextInput label='Middle Name' className='rounded-md my-2 w-[330px] py-1 pl-2 focus: outline-none ' {...form.getInputProps('middle_name')}/>
                    <TextInput label='Last Name' className='rounded-md my-2 w-[330px] py-1 pl-2 focus: outline-none ' {...form.getInputProps('last_name')}/>
                    <TextInput label='Email' className='rounded-md my-2 w-[330px] py-1 pl-2 focus: outline-none ' {...form.getInputProps('email')}/>
                    <PasswordInput label='Password' className='rounded-md my-2  w-[330px] py-1 pl-2 focus: outline-none ' {...form.getInputProps('password')}/>
                    <h6 className='mr-[210px]'>Phone number :</h6>
                    <PhoneInput
                    inputProps={{
                        name: 'phone_number',
                        placeholder:'(55) 666 7 888',
                        autoFocus: true, 
                      }}
                      inputStyle={{
                        width:330,
                        marginTop:10,
                        borderRadius:5,
                        marginLeft:1

                      }}
                      onlyCountries={['sa']}
                       country='sa'
                        
                        {...form.getInputProps('phone_number')}
                        masks={{sa: '(..) ...-.-...'}}
                        />
                    <DateInput
                        label="Birth date"
                        className='w-[320px] pt-2'
                        {...form.getInputProps('birth_date')}
                     />
                </div>
                <div className='flex items-center w-[250px] justify-center ml-[-15px] mt-5'>
                             <input type="checkbox" id='terms' className=' w-[15px] h-[15px] rounded-sm ' />
                             <label htmlFor="rememberMe" className='mx-2  text-sm text-gray-800 '>Agree on <span className='text-purple-600 '>Terms & Conditions</span></label>
                        </div>

                <Button type='submit' className='text-white bg-purple-800 rounded-md py-3 w-[330px] my-3'>Submit</Button>
            </form>
        </div>
        </div>
    </div>
    </MantineProvider>
  )
}

export default RegisterForm