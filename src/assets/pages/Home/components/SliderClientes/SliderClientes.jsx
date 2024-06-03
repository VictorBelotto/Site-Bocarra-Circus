import React from 'react'
import Slider from './components/Slider'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
import Titulo from '../../../../components/Titulo/Titulo'

const SliderClientes = () => {
  return (
    <section className='flex flex-col items-center w-[95%] max-w-7xl  mb-16 mt-8'>
      <hr className=" border border-red-default w-1/4 self-start mb-16"/>
      
      
      <Titulo subtitulo={'fámilia circense'} titulo={'nossos parceiros'} />

      <Slider/>

      <div className='flex flex-col gap-3 self-center'>
        <ButtonLink
          label={'Entre em contato'}
          link={'/'}
        />
      </div>
      <hr className=" border border-red-default w-1/4 self-end mt-16"/>
    </section>
  )
}

export default SliderClientes