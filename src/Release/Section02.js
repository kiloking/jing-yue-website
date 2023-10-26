import React from 'react'

function Section02() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
        <div className='flex gap-16 flex-col md:flex-row justify-between items-center w-10/12 mx-auto py-10 md:py-16'>
          <div className='md:w-1/2 '>
            <img src={process.env.PUBLIC_URL+'/images/release/section02_p01.png'} alt="" className='max-w-full  w-full'/>
          </div>
          <div className='md:w-1/2 relative  flex flex-col space-y-4 '>
            <img src={process.env.PUBLIC_URL+'/images/release/section02_title.png'} alt="" className='max-w-full w-[70%] mb-6  ' />
            <img src={process.env.PUBLIC_URL+'/images/release/section02_p02.png'} alt="" className='max-w-full w-full  relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section02