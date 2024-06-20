import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sectionsData } from './sectionsData/sectionsData.js';
import Separador from '../Separador/Separador.jsx';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import SliderOtherServices from './components/sliderOtherServices/sliderOtherServices.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SectionDetail = () => {
  const { id } = useParams();
  const section = sectionsData.find(section => section.id === id);

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: {
        type: "modern",
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className='flex flex-col w-full justify-center items-center pb-32'>
      <div className='bg-blue-default flex flex-col w-full pt-32 pb-16 min-h-[calc(100svh)] justify-center items-center'>
        <div className='w-[95%] max-w-7xl grande:max-w-[1380px]'>
          <Separador />
          <h2 className='text-[white] mb-8 md:mb-16 lg:mb-8'>{section.titulo} </h2>
          <p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl ml-4 mb-8'>{section.descricao}</p>

          <a href={section.imagens[0]} data-fancybox="gallery" data-caption={section.titulo}>
            <LazyLoadImage
              src={section.imagens[0]}
              alt={section.titulo}
              className='w-full h-[200px] md:h-[400px] object-cover cursor-pointer'
              wrapperClassName='w-full h-[200px] md:h-[400px] object-cover cursor-pointer'
              effect="blur"
            />
          </a>
        </div>
      </div>
      <div className='w-[95%] max-w-7xl grande:max-w-[1380px]'>
        <h3 className='mt-16 mb-4'>Galeria</h3>
        <Separador />

        <div className='grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4'>
          {section.imagens.map((src, index) => (
            <a href={src} data-fancybox="gallery" data-caption={`Imagem ${index + 1}`} key={index}>
              <LazyLoadImage
                wrapperClassName='h-[130px] md:h-[200px] w-full cursor-pointer object-cover'
                className='h-[130px] md:h-[200px] w-full cursor-pointer object-cover'
                src={src}
                alt={`Imagem ${index + 1}`}
                effect="opacity"
              />
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-4 mt-32'>
          <h3 className='text-red-default'>Veja outros serviços</h3>
          <Separador />
        </div>

        <SliderOtherServices section={section} sectionsData={sectionsData} />
      </div>
    </div>
  );
};

export default SectionDetail;
