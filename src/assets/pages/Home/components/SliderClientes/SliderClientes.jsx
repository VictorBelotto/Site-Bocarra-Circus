import React from 'react'
import Titulo from '../../../../components/Titulo/Titulo'
import logos from './scripts/logos.js'

const SliderClientes = () => {
  return (
    <section className='flex flex-col items-center w-[95%] max-w-7xl  mb-32 mt-16 '>
      
      
      <Titulo  titulo={'Nossos Parceiros'} subtitulo={'Faça parte desta fámilia circense'} variant={'red'} />

      <main className='flex w-full flex-col gap-6 md:gap-16 p-4 md:p-12  bg-[#f0f0f0] rounded-lg'>
        <div className='flex gap-6 justify-between flex-wrap md:flex-nowrap'>
          {logos.slice(0, 4).map((logo, index) =>(
            
            <img src={logo} alt={logo} className='w-32 lg:w-44' key={logo}/>
          ))}
        </div>
        <div className='flex gap-6 justify-between flex-wrap md:flex-nowrap'>
          {logos.slice(4, 8).map((logo, index) =>(
            <img src={logo} alt={logo} className='w-32 lg:w-44' key={logo}/>
          ))}
        </div>
      </main>
      
    </section>
  )
}

export default SliderClientes