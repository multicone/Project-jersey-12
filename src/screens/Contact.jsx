import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-auto pt-20 pb-12 bg-gray-100'>
      <div className='container-custom mx-auto flex flex-col items-center'>
        <div>
          <h1 className='text-4xl font-bold text-gray-800'>Contributors</h1>
        </div>
        <div className='w-full grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-x-8 gap-y-12'>
          <div className='card shadow-lg'>
            <div
              style={{ height: 400 }}
              className='card__image card__image-1'
            ></div>
            <div className='px-3 py-4'>
              <h1 className='card__title'>Shafiqul Islam</h1>
              <p>Designer and Developer</p>
            </div>
          </div>
          <div className='card shadow-lg'>
            <div
              style={{ height: 400 }}
              className='card__image card__image-2'
            ></div>
            <div className='px-3 py-4'>
              <h1 className='card__title'>Sourav Sarkar</h1>
              <p>Managing Director</p>
              <p></p>
            </div>
          </div>

          <div className='card shadow-lg'>
            <div
              style={{ height: 400 }}
              className='card__image card__image-3'
            ></div>
            <div className='px-3 py-4'>
              <h1 className='card__title'>
                Nawab Khairuzzaman Mohammad Kibria
              </h1>
              <p>Backend Developer</p>
            </div>
          </div>

          <div className='card shadow-lg'>
            <div
              style={{ height: 400 }}
              className='card__image card__image-4'
            ></div>
            <div className='px-3 py-4'>
              <h1 className='card__title'>Shakib Hossen Shanto</h1>
              <p>Programmer and Co Managing Director</p>
            </div>
          </div>
          <div className='card shadow-lg'>
            <div
              style={{ height: 400 }}
              className='card__image card__image-5'
            ></div>
            <div className='px-3 py-4'>
              <h1 className='card__title'>Tarek Jaman Labu (Ultron)</h1>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className='card shadow-lg'>
            <div
              style={{ height: 400 }}
              className='card__image card__image-6'
            ></div>
            <div className='px-3 py-4'>
              <h1 className='card__title'>Rishad Nur (Watcher)</h1>
              <p>Programmer and Co Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
