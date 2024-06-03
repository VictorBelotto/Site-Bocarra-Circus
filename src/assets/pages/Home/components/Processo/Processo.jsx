import React from 'react'
import CompareImage from './components/CompareImage/CompareImage';
import Titulo from '../../../../components/Titulo/Titulo';
import CardsProcesso from './components/CardsProcesso/CardsProcesso';



const Processo = () => {
  return (
    <section className='flex flex-col justify-center items-center w-[95%] max-w-7xl mt-16 ' >
      <Titulo titulo={'nosso processo'} subtitulo={'ÚNICO'}/>
      
      <div className='flex flex-col w-full justify-center gap-16 lg:flex-row lg:justify-between'>
        <CardsProcesso/>
        <CompareImage/>
      </div>
    </section>
  )
}

export default Processo