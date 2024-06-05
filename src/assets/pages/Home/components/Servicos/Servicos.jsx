import React from 'react';
import circo from '../../../../images/imagens_servicos/circo.jpg';
import aranha from '../../../../images/imagens_servicos/aranha.jpg';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.jpg';
import galpao from '../../../../images/imagens_servicos/galpao.jpg';
import piramide from '../../../../images/imagens_servicos/piramide.jpg';
import CardImageDesktop from './components/CardImageDesktop/CardImageDesktop';
import Titulo from '../../../../components/Titulo/Titulo';
import CardImageMobile from './components/CardImageMobile/CardImageMobile';
import ButtonLink from '../../../../components/ButtonLink/ButtonLink';

const Servicos = () => {
  const screen = window.innerWidth
  console.log(screen)

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[95%] max-w-7xl '>
        <hr className=" border border-red-default w-1/4 self-start mb-16 mt-8"/>
        <Titulo subtitulo={'temos a solução para você'} titulo={'nossos serviços'} />
      </div>

      {screen > 1000 && (
        <div className='w-full max-w-[1920px] h-[270px] flex overflow-hidden'>
        <CardImageDesktop img={galpao} label={'Galpão'} tamanho={'w-[16%]'} />
        <CardImageDesktop img={piramide} label={'Pirâmide'} tamanho={'w-[16%]'} />
        <CardImageDesktop img={circo} label={'Circo'} tamanho={'w-[36%]'} />
        <CardImageDesktop img={exclusiva} label={'Exclusiva'} tamanho={'w-[16%]'} />
        <CardImageDesktop img={aranha} label={'Aranha'} tamanho={'w-[16%]'} />
      </div>
      )}
    
      {screen < 1000 && (
        <div className='flex flex-col w-full'>
          <CardImageMobile img={circo} label={'Circo'} tamanho={'w-[100%]'} />

          <div className='flex w-full'>
            <CardImageMobile img={galpao} label={'Galpão'} tamanho={'w-[50%]'} />
            <CardImageMobile img={piramide} label={'Pirâmide'} tamanho={'w-[50%]'} />
          </div>
          <div className='flex w-full'>
            <CardImageMobile img={exclusiva} label={'Exclusiva'} tamanho={'w-[50%]'} />
            <CardImageMobile img={aranha} label={'Aranha'} tamanho={'w-[50%]'} />
          </div>
      
        </div>
      )}

      <div className='mt-16 flex'>
        <ButtonLink
          label={'Nossos serviços'}
          link={'/'}
        />
      </div>

      <div className='w-[95%] max-w-7xl flex justify-end mt-16 mb-8'>
        <hr className=" border border-red-default w-1/4 self-end"/>
      </div>
    </div>
  );
};

export default Servicos;
