import React from 'react'
import CompareImage from './components/CompareImage/CompareImage';
import Titulo from '../../../../components/Titulo/Titulo';
import CardsProcesso from './components/CardsProcesso/CardsProcesso';



const Processo = () => {
  return (
    <section className='flex flex-col justify-center items-center w-[95%] max-w-7xl' >
    <hr className="border border-red-default w-1/4 self-start mb-16 mt-8"/>
      <Titulo titulo={'nosso processo'} subtitulo={'ÚNICO'}/>
      
      <div className='flex flex-col w-full items-center gap-16 lg:flex-row lg:justify-between'>
        <CardsProcesso/>
        <CompareImage/>
      </div>
      <hr className="border border-red-default w-1/4 self-end mt-16"/>
    </section>
  )
}

export default Processo