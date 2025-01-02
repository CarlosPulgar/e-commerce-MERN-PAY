import React from 'react'
import {assets} from '../assets/assets'
const NavBar = ({setToken}) => {
  return (
    <>
        <div className='flex items-center py-2 px-4 bg-gray-100 hover:bg-inherit justify-between'> 
            <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
            <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>logout</button>
        </div>
    </>
  )
}

export default NavBar