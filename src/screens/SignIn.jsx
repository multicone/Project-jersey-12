import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-gray-100 py-4'>
      <div>
        <h1 className='text-3xl text-gray-800 mt-8 mb-4'>Sign In</h1>
      </div>
      <form className='form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4 shadow-lg'>
        <div>
          <input
            type='email'
            placeholder='Enter your email'
            className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Enter your password'
            className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500'
          />
        </div>
        <div>
          <button className='bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'>
            Sign In
          </button>
        </div>
        <Link to='/create-account'>
          <p className='text-sm text-indigo-600 hover:underline'>
            Don't have an account?
          </p>
        </Link>
      </form>
    </div>
  )
}

export default SignIn
