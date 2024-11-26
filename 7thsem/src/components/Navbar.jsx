import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className=' flex justify-between items-center px-6 bg-blue-800 py-4 fixed top-0 left-0 right-0 '>
       <div className="container mx-auto flex items-center">
        <img src="/assets/logoo.png" className="h-16 w-40 mr-5" />
        <span className="text-white ml-25 font-semibold text-2xl">Course Recommendation System</span>
      </div>
        <div className='font-bold hover:underline text-xl mx-12 py-3 text-yellow-200'>Overview</div>
        <div className=' flex gap-3'>
            <button className='font-semibold text-xl mx-12 hover:underline text-white' onClick={()=>navigate("/login")}>
                Login
            </button>
            <button className='font-semibold text-xl mx-12 hover:underline text-white' onClick={()=> navigate("/signup")}>
                SignUp
            </button>
        </div>
    </div>
  )
}

export default Navbar