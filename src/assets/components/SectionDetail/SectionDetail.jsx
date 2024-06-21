import { useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import { sectionsData } from './sectionsData/sectionsData.js';
import Separador from '../Separador/Separador.jsx';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import SliderOtherServices from './components/sliderOtherServices/sliderOtherServices.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Gallery from './components/gallery/Gallery.jsx';

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
  }, [id]);

  if (!section) {
    return <h1 className='py-32 text-center'>Section not found</h1>;
  }

  return (
    <div className='flex flex-col w-full justify-center items-center pb-32' key={section.id}>
      <div className='bg-blue-default flex flex-col w-full pt-32 pb-16 min-h-[calc(100svh)] justify-center items-center'>
        <div className='w-maxW max-w-hd grande:max-w-grande'>
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
      <div className='w-maxW max-w-hd grande:max-w-grande'>
        <h3 className='mt-16 mb-4'>Galeria</h3>
        <Separador />
        <Gallery section={section} />
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
