import React from 'react'
import CarrosselPrincipal from './components/CarrosselPrincipal/CarrosselPrincipal.jsx'
import SliderClientes from './components/SliderClientes/SliderClientes.jsx'
import Origem from './components/Origem/Origem.jsx'
import Processo from './components/Processo/Processo.jsx'
import Servicos from './components/Servicos/Servicos.jsx'
import Processo2 from './components/Processo2/Processo2.jsx'


const Home = () => {
  return (
    <main className='flex flex-col w-full items-center'>
      <CarrosselPrincipal/>

      <section className='flex flex-col justify-center items-center w-[95%] max-w-7xl '>
        <hr className="mt-8 mb-16 border border-red-default w-1/4 self-start"/>
        <span className='titlesFont text-lg text-center font-medium'>Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!</span>
        <hr className="mb-8 mt-16 border border-red-default w-1/4 self-end"/>
      </section>
      
      <Origem/>  

      <div className='flex flex-col bg-white-fundo w-full items-center justify-center'>
        <Servicos/>
      </div>

        

      <div className='flex flex-col w-full items-center justify-center'>
        <Processo/>   
        <Processo2 />
      </div> 
      
      <div className='flex flex-col bg-white-fundo w-full items-center justify-center'>
        <SliderClientes/>
      </div>
      

    </main>
  )
}

export default Home