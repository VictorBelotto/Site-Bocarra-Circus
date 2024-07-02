import { useEffect, useRef } from 'react';
import img1 from '../../../../images/imagens_carrossel/2.webp';
import img2 from '../../../../images/imagens_carrossel/3.webp';
import img3 from '../../../../images/imagens_carrossel/4.webp';
import img4 from '../../../../images/imagens_carrossel/5.webp';
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";

const CarrosselPrincipal = () => {
  const carouselRef = useRef(null);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, {
      Autoplay: {
        timeout: 5000,
        pauseOnHover: false
      },
      Dots: {
        classes: {
          list: "flex gap-2 absolute w-full justify-center bottom-0 text-[white]",
          isCurrent: "text-red-default",
        }
      },
    }, {
      Autoplay,

    });

    return () => {
      carousel.destroy();
    };
  }, []);

  return (
    <section className=' w-full h-[100svh] '>
      <div ref={carouselRef} className='f-carousel '>
        {images.map((imagem, index) => (
          <div key={index} className='relative f-carousel__slide'>
            <img
              src={imagem}
              loading='lazy'
              className='w-screen h-[100svh] object-cover'
              alt={`Imagem ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarrosselPrincipal;
