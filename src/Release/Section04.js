import React from 'react'

function Section04() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
        <div className='flex  flex-col  justify-between items-center w-10/12 mx-auto py-10 md:py-16'>
          <div className='w-full  '>
            <img src={process.env.PUBLIC_URL+'/images/release/section04_p01.png'} alt="" className='max-w-full w-full mb-16  ' />
          </div>
          <div className='w-full relative  flex flex-col md:flex-row justify-between items-center  '>
            <img src={process.env.PUBLIC_URL+'/images/release/section04_p02.png'} alt="" className=' max-w-[150px] md:max-w-[270px] w-full relative -mt-10 md:-mt-28 ' />
            <img src={process.env.PUBLIC_URL+'/images/release/section04_text.png'} alt="" className='max-w-full md:w-[70%]  relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section04