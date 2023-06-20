import React from 'react'
import Footer from './Footer'
function Header() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-8 h-screen  '>
      <div 
        className=' bg-cover bg-no-repeat bg-left-center md:col-span-6    bg-white  relative hidden md:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
      >
        <div className=' absolute bottom-20 left-1/2 -translate-x-1/2 w-1/2' >
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w-full' data-aos="fade-down" data-aos-duration="1500" />
        </div>

      </div>
      <div 
        className='block md:hidden bg-cover bg-no-repeat bg-center w-full  aspect-[9/13] relative bg-white'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg_mb.png'})`}}
      >
        <div className=' absolute bottom-20 left-1/2 -translate-x-1/2  w-2/3' >
          <img src={process.env.PUBLIC_URL+'/images/header_title_mb.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="1500" />
        </div>

      </div>
      <div className='md:col-span-2 bg-white'>
        <Footer />
      </div>


    </div>
  )
}

export default Header