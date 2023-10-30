import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section07() {
  const imgs =[
    {image:"section07_p01.png"},
    {image:"section07_p02.png"},
    {image:"section07_p03.png"},
    {image:"section07_p04.png"},
    {image:"section07_p05.png"},
    {image:"section07_p06.png"},
    {image:"section07_p07.png"},
    {image:"section07_p08.png"},
    {image:"section07_p09.png"},
    {image:"section07_p10.png"},
  ]
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg2.png'})`,
    }}
    >
       <div className=' absolute -bottom-[10%] z-40 w-[25%] right-0 '><img src={process.env.PUBLIC_URL+'/images/release/section_c02.png'} alt="" className='max-w-full  ' /></div>
        <div className='flex  flex-col  justify-between items-center w-10/12 mx-auto py-10 md:py-16 h-full  relative'>
          <div className='w-full relative h-full'>
            <div className=' absolute -top-4 md:-top-7 right-3 flex   z-10 w-1/2 '>
              <img src={process.env.PUBLIC_URL+'/images/release/section07_bigtitle.png'} alt="" className='max-w-full  object-contain' />
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
            <img src={process.env.PUBLIC_URL+'/images/release/section07_text.png'} alt="" className='max-w-full md:w-[70%] mr-auto mt-14  relative ' />
          </div>
        </div>

    </div>
  )
}

export default Section07