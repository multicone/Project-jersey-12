import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full py-16 bg-blue-100'>
      <div className='container-custom mx-auto px-4 flex'>
        <div>
          <h1
            className='text-6xl font-bold md:w-1/2'
            style={{ lineHeight: 1.2 }}
          >
            Jersey design is now revealed!
          </h1>
        </div>
        <div>
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
