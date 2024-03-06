import React from 'react'

const RecentPost = () => {
  return (
    <div>
        <div className='bg-[#EDF7FA] w-full h-[350px] my-10 '>
            <div className='grid grid-cols-1 md:text-xl md:grid-cols-2'>
                <div>
                <h2 className='py-3 text-xl sm:ml-20'>Recent posts</h2>
                <div className='bg-white h-[260px] rounded-md px-5 py-5 w-[500px] mx-auto md:ml-20'>
                    <h1 className='font-bold text-black md:text-2xl text-xl'>Creating pixel perfect icons in Figma</h1>
                    <div className='grid grid-cols-3 text-black py-4 w-[50%]'>
                        <p className='mr-[-50px] w-[110px]'>12 Feb 2020</p>
                        <p className='mx-auto px-5 w-[10px]'>|</p>
                        <p className='ml-[-30px] w-[170px]'>Figma, Icon Design</p>
                    </div>
                    <p className='text-gray-700'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                </div>

                <div>
                    <h2 className='w-[132px] pt-3 pb-5 text-sm text-blue-500  ml-auto'>View all</h2>
                <div className='bg-white h-[260px] rounded-md px-5 py-5 md:mr-20 w-[500px] mx-auto'>
                    <h1 className='font-bold text-black md:text-2xl text-xl'>Making a design system from scratch</h1>
                    <div className='grid grid-cols-3 text-black py-4 w-[50%]'>
                        <p className='mr-[-50px] w-[110px]'>12 Feb 2020</p>
                        <p className='mx-auto px-5 w-[10px]'>|</p>
                        <p className='ml-[-30px] w-[140px]'>Design, Pattern</p>
                    </div>
                    <p className='text-gray-700'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentPost