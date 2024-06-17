import React from 'react'
import Card from './components/Card/Card'
import Titulo from '../../components/Titulo/Titulo'
import circo from '../../images/imagens_servicos/circoSonhos.webp'


const Servicos = () => {
  return (
    <main className='flex flex-col w-full items-center mt-16 mb-32'>
    <div className='flex flex-col  w-[95%] max-w-7xl grande:max-w-[1380px] mb-32'>
      <h2 className=''>Na Bocarra Circus, temos orgulho em compreender as necessidades dos nossos clientes e criar soluções personalizadas. Atuamos como parceiros ativos, desafiando e respeitando seus projetos como se fossem nossos. Com base nesse entendimento, projetamos e fabricamos lonas e estruturas com precisão e inovação.</h2>
    </div>
      
      <Card 
        titulo={'Design Personalizado'} 
        descricao={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          } 
        img={circo}
      />
      <Card 
        titulo={'Design Personalizado'} 
        descricao={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          } 
        img={circo}
        variant={true}
      />  




    </main>
  )
}

export default Servicos