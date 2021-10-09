import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'

const Dashboard = ({ history }) => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      history.push('/sign-in')
    }
  }, [user])
  return (
    <div className='w-full py-8 bg-gray-100'>
      <div className='container-custom mx-auto px-4 flex flex-col items-center'>
        <h1 className='text-gray-800 text-3xl text-center'>
          Hi, Tarek Jaman Labu! 😊
        </h1>
        <div className='flex lg:flex-row flex-col items-center lg:items-center gap-6'>
          <div>
            <h1 className='text-gray-700 text-3xl mt-16 mb-4'>Jersey Demo</h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/final.png`}
              alt='Jersey preview'
            />
          </div>
          <form className='form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg'>
            <div>
              <input
                type='Number'
                placeholder='Desired jersey number'
                className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 '
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Your name in jersey'
                className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 '
              />
            </div>

            <div>
              <select
                name='paymentMethod'
                id='payment'
                className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 '
              >
                <option value='0' selected disabled>
                  -- select your payment method --
                </option>
                <option value='A'>Bkash</option>
                <option value='B'>DBBL Rocket</option>
              </select>
            </div>
            <div>
              <input
                type='text'
                placeholder='Enter your transaction ID'
                className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 '
              />
            </div>
            <div>
              <select
                name='Jersey Size'
                className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 '
              >
                <option disabled selected>
                  -- Pick your size --
                </option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
              </select>
            </div>
            <div>
              <select
                name='Jersey Sleve Size'
                className='px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 '
              >
                <option disabled selected>
                  -- Pick your sleve size --
                </option>
                <option value='half'>Half</option>
                <option value='full'>Full</option>
              </select>
            </div>
            <div>
              <button className='bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
