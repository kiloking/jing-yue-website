import React from 'react'

function Section08() {
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >   
        <div className='flex flex-col mx-auto py-10 md:py-16'>
          <div className='w-11/12 mx-auto md:w-1/2 md:pl-20 mb-10'>
            <img src={process.env.PUBLIC_URL+'/images/release/section08_title.png'} alt="" className='max-w-full w-full   ' />
          </div>
          
          <div className='flex gap-12 flex-col md:flex-row justify-between items-start w-11/12 mx-auto md:w-full md:pl-20 mx-auto '>
            <div className=' '>
              <img src={process.env.PUBLIC_URL+'/images/release/section08_p01.png'} alt="" className='max-w-full w-full   ' />
            </div>
            <div className=' relative  flex flex-col  '>

              <img src={process.env.PUBLIC_URL+'/images/release/section08_p02.png'} alt="" className='max-w-full w-full  relative ' />
            </div>
            <div className=' relative  flex flex-col  '>

              <img src={process.env.PUBLIC_URL+'/images/release/section08_p03.png'} alt="" className='max-w-full w-full  relative ' />
            </div>
          </div>
        </div>


    </div>
  )
}

export default Section08