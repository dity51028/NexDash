import React from 'react'
import { FaMoon, FaRegSun } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";




const Header = () => {
  return (
    <>
    <div className='fixed top-0 z-50 w-full bg-white border-b border-gray-200'>
        <div className='px-3 py-3 lg:px-5 lg: pl-3'>
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-start rtl:justify-end'>
                    <button>
                        <RiMenu2Line className='text-2xl'/>
                        <a href="#" className='flex ms-2 md:me-24'>
                            <MdDashboard className='h-8 me-3 text-3xl text-violet-500'/>
                            <span className='self-center '>NexDash</span></a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header