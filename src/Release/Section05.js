import React from 'react'

function Section05() {
  
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg2.png'})`,
    }}
    >
        <div className='flex  flex-col md:flex-row gap-8 justify-between items-end w-10/12 mx-auto py-10 md:py-16'>
          <div className='md:w-7/12  '>
            <img src={process.env.PUBLIC_URL+'/images/release/section05_p01.png'} alt="" className='max-w-full w-full   ' />
          </div>
          <div className='md:w-5/12 relative  flex justify-between items-center  '>
            <img src={process.env.PUBLIC_URL+'/images/release/section05_p02.png'} alt="" className='max-w-full w-full  relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section05