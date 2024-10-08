import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sectionsData } from './sectionsData/sectionsData.js';
import Separador from '../Separador/Separador.jsx';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import SliderOtherServices from '../sliderOtherServices/sliderOtherServices.jsx';
import Gallery from '../gallery/Gallery.jsx';
import { sectionDataLona } from '../SectionLonas/SectionsDataLona/SectionDataLona.js'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { keywords } from './sectionsData/metadata.js'; 

const SectionDetail = () => {
  const { id } = useParams();

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
    <motion.main
      className='flex flex-col w-full justify-center items-center pb-32'
      key={section.id}
    >
      <Helmet>
        <title>{section.titulo}</title>
        <meta name="description" content={section.descricao} />
        <meta name="keywords" content={keywords[section.id]} />
        <meta name="author" content="Bocarra Circus" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://www.bocarracircus.com/servicos/${section.id}`} />
      </Helmet>
      <motion.div
        className='bg-blue-default flex flex-col w-full min-h-[100vh] items-center relative'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='w-maxW max-w-hd grande:max-w-grande absolute top-[calc(45vh-58px)] md:top-[calc(55vh-68px)] overflow-hidden'
          variants={itemY}
        >
          <motion.h2 className='text-[white] w-fit text-wrap bgBlur px-2 md:px-4' variants={itemY}>{section.titulo}</motion.h2>
        </motion.div>

        <img
          src={section.imagens[0]}
          alt={section.titulo}
          className='w-full h-[45vh] md:h-[55vh] object-cover cursor-pointer'
        />
        <div className='w-maxW max-w-hd grande:max-w-grande mt-3 md:mt-6'>
          <motion.p className='max-w-[1000px] text-white-contraste text-lg sm:text-2xl' variants={itemY}>{section.descricao}</motion.p>
        </div>
      </motion.div>

      <div className='w-maxW max-w-hd grande:max-w-grande mt-16'>
        <h3 className=' mb-4'>Galeria</h3>
        <Separador />
        <Gallery section={section} />

        {id === 'circo' && (
          <>
            <div className='flex flex-col gap-4 mt-16'>
              <h3 className='text-red-default'>Veja os modelos de Circo</h3>
              <Separador />
            </div>
            <SliderOtherServices section={'circo'} sectionsData={sectionDataLona} />
          </>
        )}

      </div>
      <div className='w-full bg-blue-default flex justify-center py-16 mt-16'>
        <div className='w-maxW max-w-hd grande:max-w-grande'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-[white]'>Veja outros serviços</h3>
            <Separador />
          </div>
          <SliderOtherServices section={'servicos'} sectionsData={sectionsData} />
        </div>
      </div>
    </motion.main>
  );
};

export default SectionDetail;
