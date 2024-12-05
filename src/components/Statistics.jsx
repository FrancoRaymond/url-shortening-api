import React from 'react'
import {statistics } from '../Data/data'
import Form from '../components/Form'

const Statistics = () => {
  return (
    <div className=' bg-gray-200 px-2 md:px-14 lg:px-24'>
        <Form />   
        <h1 className='text-3xl text-gray-800 font-bold mx-auto text-center'>Advanced Statistics</h1>
        <p className='text-gray-500 max-w-lg mx-auto text-center my-4'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <div className='flex flex-col gap-16 py-10 relative md:flex-row md:gap-6 lg:gap-10'>
            <div className='bg-cyan-400 w-2 h-4/5 left-1/2 absolute mx-auto flex md:w-4/5 md:h-2 md:left-[10%] md:top-1/2'></div>
            {
                statistics.map(item =>
                    <div key={item.id} className='bg-white rounded-md pb-6 px-3 flex flex-col gap-3 z-50 text-center'>
                        <div className='p-3 rounded-full  bg-purple-950 w-fit relative -top-7 mx-auto'><img src={item.icon} alt="" className='size-8'/></div>
                        <h2 className='text-gray-800 font-semibold text-xl -mt-4'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                )
            }
        </div> 
    </div>
  )
}

export default Statistics
