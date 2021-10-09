import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <div className='w-full py-16'>
      <div className='container-custom mx-auto px-4 flex'>
        <div className='mt-12'>
          <h1
            className='text-6xl font-bold text-gray-900'
            style={{ lineHeight: 1.1 }}
          >
            Jersey design is now revealed!
          </h1>
          <div className='flex gap-4 items-center mt-12'>
            <div>
              <Link
                to='/preview'
                className='btn-secondary border px-6 py-3 border-indigo-500'
              >
                Learn more
              </Link>
            </div>
            <div>
              <Link
                to='/preview'
                className='border px-6 py-3 bg-gray-800 text-white hover:bg-indigo-600 flex items-center'
              >
                <FiShoppingCart className='mr-2' /> <span>Order Now</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='pr-8'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/jersey-front.png`}
            alt='Jersey front side'
            width='400'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
