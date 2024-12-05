import Ract from 'react'
import homeImg from '../assets/icons/illustration-working.svg'

const Home = () => {
    return (
        <div className='px-2 md:px-14 lg:px-24 pt-12 overflow-x-hidden md:flex flex-row-reverse gap-10 pb-36 md:py-24 items-center '>
            <img src={homeImg} alt="" className=' mx-auto md:w-1/2'/>
            <div className='flex flex-col items-center text-center md:text-left gap-5 mt-10 md:w-1/2 lg:max-w-md justify-between'>
                <h1 className='text-4xl font-bold text-gray-800 lg:text-5xl'>More than just short links</h1>
                <p className='text-gray-500'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='w-fit md:ml-0'>Get started</button> 
            </div>
        </div>
    )
}

export default Home