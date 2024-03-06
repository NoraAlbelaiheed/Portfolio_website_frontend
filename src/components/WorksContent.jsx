import DesignDashPic from '../assets/DesignDashPic.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react'

const content = [
  {
      title: "Designing Dashboards",
      date: "2020",
      tag: "Dashboard",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture:'src/assets/DesignDashPic.png'
    },
  {
      title: "Vibrant Portraits of 2020",
      date: "2018",
      tag: "Illustration",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture:'src/assets/pic2.png'
    },
  {
      title: "36 Days of Malayalam type",
      date: "2018",
      tag: "Typography",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture:'src/assets/pic3.png'
  },
  {
      title: "Components",
      date: "2018",
      tag: "Components, Design",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture:'src/assets/pic4.png'
  },
  {
    title: "Components design",
    date: "2015",
    tag: "Components, Design",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    picture:'src/assets/pic4.png'
},

]


const WorksContent = () => {
  const [searchVal, setSearchVal]=useState('')

  useEffect(() => {
   content.filter((item)=>{
      return searchVal.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(searchVal.toLowerCase())

   }

    )
      

  }, [searchVal]
  );  

  return (
    <div>
        <div>
            <div>
            <h1 className='text-3xl md:text-4xl font-bold md:ml-[280px] py-10'>Work</h1>
              </div>
               <div className='flex justify-center'>
                <input type="text" className='rounded-md border border-gray-200 bg-gray-100 w-[700px] focus: outline-none' placeholder='Search' value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}/>
               </div>
           <div className='w-[950px] flex flex-col justify-center'> 
           {content.filter((item)=>{
      return searchVal.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchVal.toLowerCase())

   }

    ).map((item, index)=>{
            return(
              <div  className='grid md:grid-cols-2 py-5 grid-cols-1 ' key={index} >
              <img src={item.picture} alt="" className='w-[300px] md:w-[250px] md:ml-[280px] rounded-sm mx-auto'/>
              <div className=' pb-2 mx-[65px] '>
                  <h1 className='font-bold text-2xl'>{item.title}</h1>
                  <div className='grid grid-cols-2  py-4'>
                      <button className='rounded-[1rem] bg-[#142850] text-white w-[60px]'>{item.date}</button>
                      <h1 className='text-gray-400 md:ml-[-100px]'>{item.tag}</h1>
                  </div>
                  <p>{item.body}</p>
                     
                  </div>
                  <div className='flex justify-center border-b border-gray-300 w-[700px] ml-[280px]'>  </div>

            </div>
            );
           })}
           
              
              </div>
        </div>
    </div>
  )
}

export default WorksContent