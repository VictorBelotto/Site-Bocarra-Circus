import React from 'react'
import exportImagesCarrossel from './exportImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarrosselPrincipal = () => {
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };;

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <section className='flex w-full h-svh'>
     

        <Swiper 
          className='swiperHome hover:cursor-grab grap'
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          loop={true}
        >
        {exportImagesCarrossel.map((imagem) =>(
          <SwiperSlide key={imagem} className='relative overflow-hidden'>
            <img  src={imagem} className='w-screen h-screen aspect-video object-cover flex items-center justify-center'/>
          </SwiperSlide>
        ))}
         <div className='autoplayProgress' slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className='text-slate-100'></span>
          </div>
      </Swiper>  
    </section>
  )
}

export default CarrosselPrincipal