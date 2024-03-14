import React, { Fragment } from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Coverimg from "../../assets/coverimage.png";
import Coverimg2 from "../../assets/coverimage2.png";
import Coverimg3 from "../../assets/coverimage3.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'

const Landing = () => {
  return (
   <Fragment>
       <div className='w-[100%] relative h-[60vh] '>
      <Swiper
      modules={[Navigation,Autoplay,EffectFade]}
      spaceBetween={50}
      effect='fade'
      slidesPerView={1}
      autoplay={{ delay: 3000 }} 
      className='w-[100%] relative h-[60vh]'
    >
      <SwiperSlide>
       <div className='absolute h-[60vh]  flex items-center justify-center w-[100%] text-[15px] lg:text-[30px] font-bold text-[white] z-20  '><div className='bg-white text-[black] border px-4 py-2 rounded-[10px]'>FRONTEND DEVELOPER</div></div>
      <img className='w-[100%] h-[100%] object-cover' src={Coverimg} alt="Coverimage..." />
      <div className='absolute bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent w-[100%] '></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='absolute  h-[60vh]  flex items-center justify-center w-[100%] text-[15px] lg:text-[30px] font-bold  text-[white] z-20 '><div className='bg-white text-[black] border px-4 py-2 rounded-[10px]'>BACKEND DEVELOPER</div></div>
      <img className='w-[100%] h-[100%] object-cover' src={Coverimg2} alt="Coverimage..." />
     <div className='absolute bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent w-[100%] '></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='absolute h-[60vh] flex items-center justify-center w-[100%] text-[15px] lg:text-[30px] font-bold   text-[white] z-20 '><div className='bg-white text-[black] border px-4 py-2 rounded-[10px]'>FULL STACK DEVELOPER</div></div>
      <img className='w-[100%] h-[100%] object-cover' src={Coverimg3} alt="Coverimage..." />
         <div className='absolute bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent w-[100%] '></div>
      </SwiperSlide>
     
     
      
    </Swiper>
          
      </div>
   </Fragment>
  )
}

export default Landing