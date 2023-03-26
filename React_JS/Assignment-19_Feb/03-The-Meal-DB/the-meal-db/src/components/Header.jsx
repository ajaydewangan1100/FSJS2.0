
import React from 'react'
import meal_image from '../assets/meal.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-5 items-center mt-2'>
        <Link to="/">
        <img src={meal_image} className="w-22 m-1 h-12" />
        </Link>
        <div className='flex gap-2' >
          <Link to="/about" 
          className='bg-gray-200 hover:bg-[#207645] hover:text-gray-100 font-bold text-[#207645] rounded px-4 py-2 duration-200 '> 
          About </Link>
          <Link to="/contact" 
          className='bg-gray-200 hover:bg-[#207645] hover:text-gray-100 font-bold text-[#207645] rounded px-4 py-2 duration-200 '> 
          Contact </Link>
          {/* <Link to="/login" 
          className='bg-gray-200 hover:bg-[#207645] hover:text-gray-100 font-bold text-[#207645] rounded px-4 py-2 duration-200 '> 
          Login </Link> */}
        </div>
    </div>
  )
}

export default Header;