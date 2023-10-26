import React from 'react'

function Section03() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
        <div className='flex gap-16 flex-col md:flex-row justify-between items-center w-full md:pl-36 mx-auto py-10 md:py-16'>
          <div className='w-11/12 mx-auto md:w-1/2  '>
            <img src={process.env.PUBLIC_URL+'/images/release/section03_title.png'} alt="" className='max-w-full w-[80%] mb-16  ' />
            <img src={process.env.PUBLIC_URL+'/images/release/section03_text.png'} alt="" className='max-w-full  w-[70%]'/>
          </div>
          <div className='md:w-1/2 relative  flex flex-col  '>

            <img src={process.env.PUBLIC_URL+'/images/release/section03_p01.png'} alt="" className='max-w-full w-full  relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section03