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

      <section className='flex flex-col justify-center items-center w-[95%] max-w-7xl grande:max-w-[1380px]'>
        <hr className=" border border-red-default w-1/4 self-start  mt-12 mb-12"/>
        <h3 className='text-center'>Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!</h3>
        <hr className=" border border-red-default w-1/4 self-end  mt-12 mb-14"/>
      </section>
      
      <Origem/>  

      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Servicos/>
      </div>

      <Processo/> 
      
      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Processo2/>
      </div> 
      
      <div className='flex flex-col  w-full items-center justify-center '>
        <SliderClientes/>
      </div>
      

    </main>
  )
}

export default Home