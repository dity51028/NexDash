import React from 'react'
import { FaMoon } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";




const Header = ({darkMode,toggleDarkMode,toggleIsSidebar}) => {
  return (
    <>
    <div className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
            <div className='flex items-center justify-between '>
                <div className='flex items-center justify-start rtl:justify-end'>
                    <button className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-200  focus:ring-8 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  '>
                        <RiMenu2Line className=' md:hidden text-2xl'/>
                        
                    </button>
                    <a href="#" className='flex ms-2 md:me-24' onClick={toggleIsSidebar}>
                            <MdDashboard className='h-8 me-3 text-3xl text-violet-500'/>
                            <span className='self-center md:text-3xl font-bold text-2xl whitespace-nowrap dark:text-white '>NexDash</span></a>
                </div>
                <button className='dark:bg-slate-50 dark:text-slate-700 rounded-full p-2 text-xl' onClick={toggleDarkMode}>
                    {darkMode?<IoIosSunny />:<FaMoon/>}
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header