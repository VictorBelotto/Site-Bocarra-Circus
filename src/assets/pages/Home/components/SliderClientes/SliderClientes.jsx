import React from 'react'
import Slider from './components/Slider'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
import Titulo from '../../../../components/Titulo/Titulo'

const SliderClientes = () => {
  return (
    <section className='flex flex-col items-center w-[95%] max-w-7xl  mb-32 mt-12'>
      <hr className=" border border-red-default w-1/4 self-start mb-16"/>
      
      
      <Titulo  titulo={'Nossos Parceiros'} subtitulo={'Faça parte desta fámilia circense'} />

      <Slider/>

      <div className='flex flex-col gap-3 self-center mt-8'>
      </div>
      <hr className=" border border-red-default w-1/4 self-end mt-32"/>
    </section>
  )
}

export default SliderClientes