import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SliderOtherServices = ({ sectionsData, section }) => {
  const carouselRef = useRef(null)

  useEffect(() => {
    const options = {
      infinite: true,
      Autoplay: {
        timeout: 4000,
      },
      Navigation: true,

    }

    const carousel = new Carousel(carouselRef.current, options, {
      Autoplay
    })

    return () => {
      carousel.destroy();
    };
  }, [])

  return (
    <div className='f-carousel overflow-hidden' ref={carouselRef}>
      {sectionsData.map((data, index) => {
        if (data.id !== section.id) {
          return (
            <div key={index} className='= f-carousel__slide f-carousel2 overflow-hidden group'>
              <a href={`/servicos/${data.id}`} className='flex flex-col w-fit justify-center'>

                <LazyLoadImage
                  src={data.imagens[0]}
                  alt={data.id}
                  className='w-auto  aspect-[4/3] object-cover hover:scale-105 hover:brightness-50  transition duration-300' 
                  wrapperClassName='w-auto  aspect-[4/3] object-cover'
                />

                <h4 className='text-[white] absolute w-full text-center hidden group-hover:block pointer-events-none transform transition duration-300'>{data.titulo}</h4>
              </a>
            </div>
          );
        }
        return null;
      })}
    </div>
  )
}

export default SliderOtherServices