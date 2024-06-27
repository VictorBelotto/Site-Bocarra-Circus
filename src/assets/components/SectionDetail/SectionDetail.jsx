import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sectionsData } from './sectionsData/sectionsData.js';
import Separador from '../Separador/Separador.jsx';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import SliderOtherServices from './components/sliderOtherServices/sliderOtherServices.jsx';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Gallery from './components/gallery/Gallery.jsx';
import ContinueNavegando from  '../../components/continueNavegando/ContinueNavegando.jsx'


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
    <main 
      className='flex flex-col w-full justify-center items-center pb-32' 
      key={section.id}
    
    >
      <div className='bg-blue-default flex flex-col w-full min-h-[100vh] items-center'>
        <div className='w-maxW max-w-hd grande:max-w-grande absolute top-[calc(55svh-78px)] md:top-[calc(65svh-118px)]'>
            <h2 className='text-[white] w-fit bgBlur px-4'>{section.titulo}</h2>
        </div>

        <img
          src={section.imagens[0]}
          alt={section.titulo}
          className='w-full h-[55svh] md:h-[65svh] object-cover cursor-pointer'
        />
        <div className='w-maxW max-w-hd grande:max-w-grande mt-3 md:mt-6'>
          <p className='max-w-[1000px] text-white-contraste text-lg sm:text-2xl mb-8'>{section.descricao}</p>
        </div>
        <ContinueNavegando/>
      </div>
      <div className='w-maxW max-w-hd grande:max-w-grande mt-16'>
        <h3 className=' mb-4'>Galeria</h3>
        <Separador />
        <Gallery section={section} />

        <div className='flex flex-col gap-4 mt-16'>
          <h3 className='text-red-default'>Veja outros serviços</h3>
          <Separador />
        </div>

        <SliderOtherServices section={section} sectionsData={sectionsData} />
      </div>
    </main>
  );
};

export default SectionDetail;
