import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='w-full bg-gray-800 py-4'>
        <div className='container-custom flex justify-between items-center mx-auto px-4'>
          <div>
            <Link to='/' className='text-white text-lg uppercase'>
              12th Intake
            </Link>
          </div>

          <div>
            <Link
              to='/sign-in'
              className='bg-indigo-500 px-4 py-2 text-white rounded-xl hover:bg-indigo-600'
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-gray-600 flex justify-center py-2'>
        <div className='flex items-center gap-x-6'>
          <div>
            <Link to='/' className='text-gray-100'>
              Home
            </Link>
          </div>
          <div>
            <Link to='/dashboard' className='text-gray-100'>
              Dashboard
            </Link>
          </div>
          <div>
            <Link to='/contact' className='text-gray-100'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
