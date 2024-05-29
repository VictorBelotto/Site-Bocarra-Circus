import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const gallery = Object.values(import.meta.glob('/src/assets/images/logos_circos_parceiros/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const logos = gallery.map((img) => img);

const Slider = () => {
  const [larguraTela, setLarguraTela] = React.useState(5);

  const atualizarLarguraTela = () => {
    window.innerWidth < 500 ? setLarguraTela(2) : setLarguraTela(5);
  };

  React.useEffect(() => {
    atualizarLarguraTela();

    const handleResize = () => {
      atualizarLarguraTela();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return ( 
    <Swiper
      className="mySwiper flex max-w-7xl w-[95%] flex-wrap items-center justify-start"
      slidesPerView={larguraTela}
      spaceBetween={16}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      
      loop={true}
      >
      {logos.map((logo) =>(
        <SwiperSlide key={logo} className='flex w-[150px] h-[100px] md:w-[250px] md:h-[150px] items-center justify-center mb-10 shadow-md rounded-lg '  >
            <img src={logo} className=' flex cursor-pointer hover:scale-105 w-[150px] h-[100px] md:w-[250px] md:h-[150px]' alt={`Logo ${logo}`} />
        </SwiperSlide>
      ))}
    </Swiper>      
    
  )
}

export default Slider