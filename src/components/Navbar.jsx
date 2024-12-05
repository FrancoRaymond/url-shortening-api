import React, {useEffect, useState} from 'react'
import logo from '../assets/icons/logo.svg'
import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'

const Navbar = () => {
  const [menuState, setMenuState] = useState('');
  const [size, setSize] = useState(window.innerWidth);


  function handleMenuClick() {
    const mennu = menuState === '' ? 'active' : '';
    setMenuState(() => mennu);
  }

  function handleResize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (size > 640) {
      setMenuState('');
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return (
    <header className='flex justify-between p-2 w-full sm:items-center md:px-14 lg:px-24 fixed top-0 bg-white'>
      <img src={logo} alt="logo"  className='h-6 mr-10 sm:h-8'/>
        <nav className={` ${menuState} absolute sm:w-full sm:justify-between sm:flex sm:flex-row sm:p-0 sm:bg-white sm:top-0 sm:left-0 sm:translate-x-0 top-10 left-1/2 -translate-x-1/2 sm:relative bg-blue-950 text-white font-semibold w-[calc(100%-16px)] text-center py-10 rounded-lg`}>
          <ul className='border-b border-gray-400 sm:items-center flex flex-col gap-6 sm:gap-3 md:gap-6 lg:gap:8 sm:mx-0 sm:border-0 pb-6 w-4/5 mx-auto sm:flex-row sm:pb-0 sm:text-gray-400'>
            <li className='h-fit'><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <div className='flex flex-col gap-6 pt-6 sm:flex-row sm:p-0 sm:gap-3 sm:items-center'>
            <span className='text-nowrap sm:text-gray-400'>Log in</span>
            <button className='sm:w-fit text-nowrap'>Sign up</button>
          </div>
        </nav>  
      <img 
        onClick={handleMenuClick}
        src={menuState === 'active' ? close : menu}
        alt="menu icon"
        className='size-6 transition-all duration-300 cursor-pointer sm:hidden sm:top-0'
      />
    </header>
  )
}

export default Navbar
