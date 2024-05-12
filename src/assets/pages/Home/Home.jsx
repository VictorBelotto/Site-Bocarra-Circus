import React from 'react'
import CarrosselPrincipal from '../../components/CarrosselPrincipal/CarrosselPrincipal.jsx'
import MiniGaleria from '../../components/MiniGaleria/MiniGaleria.jsx'


const Home = () => {
  return (
    <main className='flex flex-col w-full items-center'>
      <CarrosselPrincipal/>

      <section className='flex flex-col justify-center w-[95%] max-w-7xl '>
        <hr class="my-8 border border-red-default w-1/4"/>
        <span className='titlesFont text-lg text-center font-medium'>Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!</span>
        <hr class="my-8 border border-red-default w-1/4 self-end"/>
      </section>

      <MiniGaleria/>


    </main>
  )
}

export default Home