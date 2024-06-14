import React from 'react';
import img1 from '../../../../images/imagens_carrossel/1.webp'
import img2 from '../../../../images/imagens_carrossel/2.webp'
import img3 from '../../../../images/imagens_carrossel/3.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const CarrosselPrincipal = () => {
  const images = [img1, img2, img3]
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className='flex w-full h-svh'>
      <Swiper
        className='swiperHome hover:cursor-grab grap'
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
      >
        {images.map((imagem, index) => (
          <SwiperSlide key={index} className='relative overflow-hidden '>
            <motion.img
              src={imagem}
              loading='lazy'
              className='w-screen h-screen aspect-[9/16] object-cover flex items-center justify-center '
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4,0.6,0.8, 1] }}
              transition={{ duration: 1.5 }}
            />
          </SwiperSlide>
        ))}
        <motion.div 
          className='autoplayProgress' slot="container-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className='text-slate-100'></span>
        </motion.div>
      </Swiper>
    </section>
  );
};

export default CarrosselPrincipal;
