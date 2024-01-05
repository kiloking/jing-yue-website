import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section09() {
  const imgs =[
    {image:"section09_p01.png"},
    {image:"section09_p02.png"},
    {image:"section09_p03.png"},
    {image:"section09_p04.png"},
    {image:"section09_p05.png"},
  ]
  const imgs2 =[
    {image:"section09_h01.png"},
    {image:"section09_h02.png"},

  ]
  return (
    <div
    className='w-full  bg-no-repeat  bg-center bg-cover  relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg2.png'})`,
    }}
    >   
        <div className='flex flex-col mx-auto py-10 md:py-16'>
          <div className='w-10/12 mx-auto md:w-  mb-10'>
            <img src={process.env.PUBLIC_URL+'/images/release/section09_title.png'} alt="" className='max-w-full w-full   ' />
          </div>
          <div className='w-10/12 mx-auto md:w-  mb-10'>
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
          <div className='w-10/12 mx-auto md:w-  mb-10'>
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
                imgs2.map((item,index)=>{
                  return(
                    <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/release/'+ item.image} alt="" className='w-full' /></SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>

        </div>


    </div>
  )
}

export default Section09