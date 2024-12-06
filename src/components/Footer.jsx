import React from 'react'
import logo from '../assets/icons/logo.svg'
import facebook from '../assets/icons/icon-facebook.svg'
import pinterest from '../assets/icons/icon-pinterest.svg'
import instagram from '../assets/icons/icon-instagram.svg'
import twitter from '../assets/icons/icon-twitter.svg'

const Footer = () => {

  return (
    <div className='bg-gray-900 px-2 md:px-14 lg:px-24 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center py-10 gr'>
        <img src={logo} alt="" className='h-6 bg-white w-fit mx-auto'/>
        <div>
            <h2 className='text-white font-semibold'>Features</h2>
            <div className='flex flex-col gap-1 text-gray-400 mt-3'>
                <span>Link Shortening</span>
                <span>Branded links</span>
                <span>Analytics</span>
            </div>
        </div>
        <div>
            <h2 className='text-white font-semibold'>Resources</h2>
            <div className='flex flex-col gap-1 text-gray-400 mt-3'>
                <span>Blog</span>
                <span>Developers</span>
                <span>Support</span>
            </div>
        </div>
        <div>
            <h2 className='text-white font-semibold'>Company</h2>
            <div className='flex flex-col gap-1 text-gray-400 mt-3'>
                <span>About</span>
                <span>Our team</span>
                <span>Careers</span>
                <span>Contact</span>
            </div>
        </div>
        <div className='flex gap-4 mx-auto'>
            <img src={facebook} alt="" className='size-5'/>
            <img src={twitter} alt="" className='size-5'/>
            <img src={pinterest} alt="" className='size-5'/>
            <img src={instagram} alt="" className='size-5'/>
        </div>
    </div>
  )
}

export default Footer
