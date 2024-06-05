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
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[95%] max-w-7xl '>
        <hr className=" border border-red-default w-1/4 self-start mb-16"/>
        <Titulo subtitulo={'nossos trem'} titulo={'serviços'} />
      </div>

      <div className='w-full max-w-[1920px] h-[270px] flex overflow-hidden'>
        <CardImageDesktop img={galpao} label={'Galpão'} tamanho={'w-[16%]'} />
        <CardImageDesktop img={piramide} label={'Pirâmide'} tamanho={'w-[16%]'} />
        <CardImageDesktop img={circo} label={'Circo'} tamanho={'w-[36%]'} />
        <CardImageDesktop img={exclusiva} label={'Exclusiva'} tamanho={'w-[16%]'} />
        <CardImageDesktop img={aranha} label={'Aranha'} tamanho={'w-[16%]'} />
      </div>

      <div className='w-[95%] max-w-7xl flex justify-end'>
        <hr className="mt-16 border border-red-default w-1/4 self-end"/>
      </div>
    </div>
  );
};

export default Servicos;
