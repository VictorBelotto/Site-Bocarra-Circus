import React from 'react'
import Slider from './components/Slider'
import ButtonLink from '../ButtonLink/ButtonLink'

const SliderClientes = () => {
  return (
    <section className='flex flex-col items-center w-[95%] max-w-7xl gap-12 mb-8'>
      <hr class=" border border-red-default w-1/4 self-start"/>
      <hr class=" border border-red-default w-1/4 self-end"/>
      <div className='self-start'>
        <h3 className='subtitulo'>fámilia circense</h3>
        <h2 className='titulo'>nossos parceiros</h2>
      </div>

      <Slider/>

      <div className='flex flex-col gap-3 self-center'>
        <ButtonLink
          label={'Entre em contato'}
          link={'/'}
        />
      </div>
    </section>
  )
}

export default SliderClientes