import React, { useState } from 'react';
import circo from '../../../../images/imagens_servicos/circo.jpg';
import aranha from '../../../../images/imagens_servicos/aranha.jpg';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.jpg';
import galpao from '../../../../images/imagens_servicos/galpao.jpg';
import piramide from '../../../../images/imagens_servicos/piramide.jpg';
import ContainerMenor from './components/ContainerMenor/ContainerMenor';
import Titulo from '../../../../components/Titulo/Titulo';

const Servicos = () => {

  return (

    <div className='flex flex-col justify-center items-center '>
      
      <div className='w-[95%] max-w-7xl '>
        <Titulo subtitulo={'nossos trem'} titulo={'serviços'}/>
      </div>
      <div className='w-full max-w-[1920px] h-full max-h-[310px]  flex bg-black overflow-hidden'>
          
          <ContainerMenor img={galpao} label={'Galpão'}/>
          <ContainerMenor img={piramide} label={'Pirâmide'}/>
        

        <div className='flex w-full max-w-[36%] overflow-hidden relative justify-center items-center '>
          <img
            className='w-full cursor-pointer imgBlur h-[270px]'
            src={circo}
            alt='imagem {piramide}'
          />
          <p className={`absolute z-30 font-semibold text-3xl text-black paragrafo `}>Circo</p>
        </div>

        
          <ContainerMenor img={exclusiva} label={'Exclusiva'} />
          <ContainerMenor img={aranha} label={'Aranha'} />
        
      </div>
    </div>
    
  );
};

export default Servicos;