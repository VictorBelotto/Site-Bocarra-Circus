import React from 'react';
import circoSonhos from '../../../../images/imagens_servicos/circoSonhos.jpg';
import aranha from '../../../../images/imagens_servicos/aranha.jpg';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.jpg';
import galpao from '../../../../images/imagens_servicos/galpao.jpg';
import piramide from '../../../../images/imagens_servicos/piramide.jpg';
import CardImageDesktop from './components/CardImageDesktop/CardImageDesktop';
import Titulo from '../../../../components/Titulo/Titulo';
import { motion } from 'framer-motion';
import Separador from '../../../../components/Separador/Separador';


const Servicos = () => {
  const [inView, setInView] = React.useState(false)

  return (
    <motion.div className='flex flex-col w-[95%] max-w-7xl grande:max-w-[1380px] justify-center items-center py-16' >
      <Separador/>
      <div className='w-full'>
        <Titulo titulo={'Nossos Serviços'} subtitulo={'Mais de 30 anos de experiência'} variant={'blue'}/>
      </div>
     
        <div className=' flex w-full flex-wrap overflow-hidden  justify-center'>
          <CardImageDesktop 
            img={circoSonhos} 
            title={'Circo'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  '} 
            ordem={'w-full   order-1 lg:order-3'} 
          />

          <CardImageDesktop 
            img={galpao} 
            title={'Galpão'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  '} 
            ordem={'order-2'} 
          />

          <CardImageDesktop 
            img={piramide} 
            title={'Pirâmide'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  '} 
            ordem={'order-3 lg:order-2'} 
          />

          <CardImageDesktop 
            img={exclusiva} 
            title={'Exclusiva'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  '} 
            ordem={'order-4'} 
          />

          <CardImageDesktop 
            img={aranha} 
            title={'Aranha'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  '} 
            ordem={'order-5'} 
          />
        </div>

    </motion.div>
  );
};

export default Servicos;