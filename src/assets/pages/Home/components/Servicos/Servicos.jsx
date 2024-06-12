import React from 'react';
import circo from '../../../../images/imagens_servicos/circo.jpg';
import aranha from '../../../../images/imagens_servicos/aranha.jpg';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.jpg';
import galpao from '../../../../images/imagens_servicos/galpao.jpg';
import piramide from '../../../../images/imagens_servicos/piramide.jpg';
import CardImageDesktop from './components/CardImageDesktop/CardImageDesktop';
import Titulo from '../../../../components/Titulo/Titulo';


const Servicos = () => {

  return (
    <div className='flex flex-col w-[95%] max-w-7xl justify-center items-center'>
      <div className='w-full'>
        <hr className=" border border-red-default w-1/4 self-start mb-32 mt-12"/>
        <Titulo titulo={'Nossos Serviços'} subtitulo={'Mais de 30 anos de experiência'}/>

      </div>
     
        <div className=' flex w-full flex-wrap overflow-hidden  justify-center'>
          <CardImageDesktop 
            img={circo} 
            title={'Circo'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  '} 
            ordem={'w-full h-[420px] order-1 lg:order-3'} 
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

      <div className='w-[95%] max-w-7xl flex justify-end mt-32 mb-12'>
        <hr className=" border border-red-default w-1/4 self-end"/>
      </div>
    </div>
  );
};

export default Servicos;