import React from 'react'
import Slider from './components/Slider'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
import Titulo from '../../../../components/Titulo/Titulo'

const SliderClientes = () => {
  return (
    <section className='flex flex-col items-center w-[95%] max-w-7xl gap-12 mb-8'>
      <hr className=" border border-red-default w-1/4 self-start"/>
      
      
      <Titulo subtitulo={'fámilia circense'} titulo={'nossos parceiros'} />

      <Slider/>

      <div className='flex flex-col gap-3 self-center'>
        <ButtonLink
          label={'Entre em contato'}
          link={'/'}
        />
      </div>
      <hr className=" border border-red-default w-1/4 self-end"/>
    </section>
  )
}

export default SliderClientes