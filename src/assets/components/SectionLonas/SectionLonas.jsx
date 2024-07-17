import { useParams } from 'react-router-dom';
import { sectionDataLona } from './SectionsDataLona/SectionDataLona.js'
import ContinueNavegando from '../continueNavegando/ContinueNavegando.jsx';
import Separador from '../Separador/Separador.jsx';
import SliderOtherServices from '../sliderOtherServices/sliderOtherServices.jsx';
import Galerry from '../gallery/Gallery.jsx'
import { useEffect } from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { motion } from 'framer-motion';

const SectionLonas = () => {
  const { id } = useParams()
  const section = sectionDataLona.find(section => section.id === id);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
      },
    },
  };

  const itemY = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };

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

  return (
    <main
      className='flex flex-col w-full justify-center items-center pb-32'
      key={section.id}
    >
      <motion.div
        className='bg-blue-default flex flex-col w-full min-h-[100vh] items-center'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='w-maxW max-w-hd grande:max-w-grande absolute top-[calc(55svh-68px)] md:top-[calc(65svh-98px)] overflow-hidden'
          variants={itemY}
        >
          <motion.h2
            className='text-[white] w-fit text-wrap bgBlur px-2 md:px-4'
            variants={itemY}
          >
            {section.titulo}</motion.h2>
        </motion.div>

        <img
          src={section.imagens[0]}
          alt={section.titulo}
          className='w-full h-[55svh] md:h-[65svh] object-cover cursor-pointer'
        />
        <div className='w-maxW max-w-hd grande:max-w-grande mt-3 md:mt-6'>
          <motion.p
            className='max-w-[1000px] text-white-contraste text-lg sm:text-2xl'
            variants={itemY}
          >
            {section.descricao}
          </motion.p>
        </div>
        <div className='w-maxW max-w-hd grande:max-w-grande mt-auto'>
          <ContinueNavegando />
        </div>

      </motion.div>
      <div className='w-maxW max-w-hd grande:max-w-grande mt-16'>
        <h3 className=' mb-4'>Galeria</h3>
        <Separador />

        <Galerry section={section} />

      </div>
      <div className='w-full bg-blue-default flex justify-center py-16 mt-16'>
        <div className='w-maxW max-w-hd grande:max-w-grande'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-[white]'>Veja outros modelos de Circo</h3>
            <Separador />
          </div>
          <SliderOtherServices section={'circo'} sectionsData={sectionDataLona} />
        </div>
      </div>
    </main>
  )
}

export default SectionLonas