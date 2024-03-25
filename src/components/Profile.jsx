import { MantineProvider, Avatar , Text ,TextInput ,Select ,Button } from '@mantine/core'
import {DateInput , DatesProvider , DatePickerInput} from '@mantine/dates'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import "@mantine/dates/styles.css";
import Cookies from 'js-cookie';
import { useForm } from '@mantine/form';
import * as yup from 'yup';
import { yupResolver } from 'mantine-form-yup-resolver';


const Profile = () => {
    const schema =yup.object().shape({
        email:yup.string().email('invalid email format'),
        phone_number: yup.number(),
        first_name:yup.string().matches(/^[^0-9]+$/, 'This field must not contain numbers'),
        middle_name:yup.string().matches(/^[^0-9]+$/, 'This field must not contain numbers'),
        last_name:yup.string().matches(/^[^0-9]+$/, 'This field must not contain numbers'),
        gender:'',
        birth_date:'',
    })

    const [data,setData]=useState([])    
    const [editable, setEditable]=useState(false)
    const url='https://stg.api.contenido.tam.codes/users/profile'
    const token = Cookies.get('token')
    let user={};

    useEffect (  ()=>{
        
          Axios.get(url,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
            )
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
     },
     []
    )
    const form = useForm(
        {initialValues:
            {
                email:data.email,
                phone_number:data.phone_number,
                password:data.password,
                first_name:data.first_name,
                middle_name:data.middle_name,
                last_name:data.last_name,
                gender:data.gender,
                birth_date:data.gender,
            },
        validate:yupResolver(schema),
        validateInputOnBlur:true
        }

    )

     function HandleSubmit(values){
        Axios.put(url,{user:values},{
            headers:{
                Authorization:`Bearer ${token}`
            }}
           )
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
     }
 console.log(data)
 const disabled = {
    disabled:true
  };

  return (
    <MantineProvider>
    <div >
        <div className='flex flex-col justify-center items-center mx-10 md:mx-72  my-6 py-4 rounded-md shadow-md bg-white'>
            <div className='grid grid-cols-2 gap-0  mb-5  md:w-[400px] w-[380px]'>
            <Avatar variant="transparent" radius="xs" size="xl" src="" color='grape' className='avatar'/>
            <div className='md:w-[300px] ml-[-100px] w-[250px]'>
            <Text className='text-black font-bold text-md  my-2'>{data.full_name} </Text>
            <Text className='text-black font-bold text-sm  my-2'>{data.age!=='' ? 22:data.age}  years old</Text>
            <Text className='text-gray-400  my-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam assumenda corporis natus minima siti iusto, sunt ipsum!.</Text>
            </div>
            </div>
            <form action='' onSubmit={form.onSubmit((values)=>HandleSubmit(values))}>
            <div className='md:w-[400px] w-[330px]'>
            <TextInput 
             label="First name"  placeholder={data.first_name} 
            {...editable ? null:{...disabled}}
            {...form.getInputProps('first_name')}
            />
            <TextInput  label="Middle name" className='py-2' placeholder={data.middle_name} {...editable ? null:{...disabled}} {...form.getInputProps('middle_name')}/>
            <TextInput  label="Last name"  className='pb-2' placeholder={data.last_name}   {...editable ? null:{...disabled}} {...form.getInputProps('last_name')}/>
            <TextInput  label="Email" className='pb-2'placeholder={data.email} {...editable ? null:{...disabled}} {...form.getInputProps('email')}/>
            <TextInput  label="Phone number"  className='pb-2' placeholder={data.phone_number}  {...editable ? null:{...disabled}} {...form.getInputProps('phone_number')}/>
            <Select
                label="gender"
                placeholder="female"
                data={['Male','Female']}
                className='pb-2'
                {...editable ? null:{...disabled}} 
                {...form.getInputProps('gender')}
                />
            <DatePickerInput
                leftSectionPointerEvents="none"
                label="Birth date"
                placeholder={data.birth_date} 
                className='pb-2'
                {...editable ? null:{...disabled}} 
                {...form.getInputProps('birth_date')}
                />
            </div>
            <div className='grid grid-cols-2 gap-1'>
            <Button className='bg-purple-400 text-black my-9 hover:bg-purple-600 ' onClick={()=>{
                setEditable(!editable)
                {!editable?null:window.location.reload(true)}
            }} >{editable?'unEdit information':'Edit information'}</Button>
            <Button  type='submit' className='bg-purple-400 text-black my-9 hover:bg-purple-600 disabled:bg-gray-300 disabled:text-white'{...editable ? null:{...disabled}}>save information</Button>
            </div>

            </form>
        </div>
    </div>
    </MantineProvider>
  );
}

export default Profile