import React from 'react'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-blue-100 py-4'>
      <div>
        <h1 className='text-3xl text-gray-800 mt-8 mb-4'>Account Creation</h1>
      </div>
      <form className='form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4'>
        <div>
          <input
            type='text'
            placeholder='Your name'
            className='px-3 py-2 rounded-xl bg-gray-100 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Enter your email'
            className='px-3 py-2 rounded-xl bg-gray-100 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Enter your new password'
            className='px-3 py-2 rounded-xl bg-gray-100 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Confirm your password'
            className='px-3 py-2 rounded-xl bg-gray-100 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'
          />
        </div>
        <div>
          <button className='bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'>
            Create account
          </button>
        </div>
        <Link to='/sign-in'>
          <p className='text-sm text-indigo-600 hover:underline'>
            Already have an account?
          </p>
        </Link>
      </form>
    </div>
  )
}

export default CreateAccount
