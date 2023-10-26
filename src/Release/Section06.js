import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section06() {
  const imgs =[
    {image:"section06_p01.png"},
    {image:"section06_p02.png"},
    {image:"section06_p03.png"},
  ]
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
        <div className='flex  flex-col  justify-between items-center w-10/12 mx-auto py-10 md:py-16 h-full  '>
          <div className='w-full relative h-full'>
            <div className=' absolute top-0 bottom-0 -left-3  md:-left-5 flex items-center   z-10 h-full'>
              <img src={process.env.PUBLIC_URL+'/images/release/section06_bigtitle.png'} alt="" className='max-w-full h-full object-contain' />
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }} 
              modules={[Pagination,Autoplay]}
              autoplay={{delay:1800}}
              centeredSlides={true}
              className='w-full'
            >
              {
                imgs.map((item,index)=>{
                  return(
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/release/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className='w-full relative  flex justify-between items-center  '>
            <img src={process.env.PUBLIC_URL+'/images/release/section06_text.png'} alt="" className='max-w-full md:w-[70%] ml-auto mt-14  relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section06