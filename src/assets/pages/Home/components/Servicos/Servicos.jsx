import React from 'react';
import circoSonhos from '../../../../images/imagens_servicos/circoSonhos.webp';
import aranha from '../../../../images/imagens_servicos/aranha.webp';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.webp';
import galpao from '../../../../images/imagens_servicos/galpao.webp';
import piramide from '../../../../images/imagens_servicos/piramide.webp';
import CardImageDesktop from './components/CardImageDesktop/CardImageDesktop';
import Titulo from '../../../../components/Titulo/Titulo';
import { motion } from 'framer-motion';
import Separador from '../../../../components/Separador/Separador';

const Servicos = () => {
  const [inView, setInView] = React.useState(false);
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 1.1,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { x: -15, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div className="flex flex-col w-maxW max-w-hd grande:max-w-grande justify-center items-center py-16">
      <Separador />
      <Titulo titulo={'Nossos Serviços'} subtitulo={'Mais de 30 anos de experiência'} variant={'blue'} />
      <motion.div
        className="flex w-full flex-wrap overflow-hidden justify-center"
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : false}
        whileInView={() => setInView(true)}
      >
        <motion.div variants={item} className="overflow-hidden sm:max-h-[650px] lg:h-fit w-full lg:w-[20%] ">
          <CardImageDesktop
            img={circoSonhos}
            title={'Circo'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '}
            to='/servicos/circo'
          />
        </motion.div>
        <motion.div variants={item} className="overflow-hidden sm:max-h-[650px] lg:h-fit w-[50%] lg:w-[20%]">
          <CardImageDesktop
            img={piramide}
            title={'Pirâmide'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '}
            to='/servicos/piramide'
          />
        </motion.div>
        <motion.div variants={item} className="overflow-hidden sm:max-h-[650px] lg:h-fit w-[50%] lg:w-[20%] ">
          <CardImageDesktop
            img={exclusiva}
            title={'Exclusiva'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '}
            to='/servicos/exclusivas'
          />
        </motion.div>
        <motion.div variants={item} className="overflow-hidden sm:max-h-[650px] lg:h-fit w-[50%] lg:w-[20%] ">
          <CardImageDesktop
            img={galpao}
            title={'Galpão'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '}
          />
        </motion.div>
        <motion.div variants={item} className="overflow-hidden sm:max-h-[650px] lg:h-fit w-[50%] lg:w-[20%] ">
          <CardImageDesktop
            to='/servicos/aranha'
            img={aranha}
            title={'Aranha'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Servicos;
