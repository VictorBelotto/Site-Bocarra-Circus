import React from 'react'
import Card from './components/Card/Card'
import circo from '../../images/imagens_servicos/circoSonhos.webp'
import Separador from '../../components/Separador/Separador'
import mouseIcon from '../../images/bocarra_visual/mouseIcon.svg'


const Servicos = () => {
  return (
    <main className='flex flex-col w-full items-center mb-32'>
      <div className='flex w-full bg-blue-default justify-center'>
        <div className='flex flex-col w-[95%] max-w-7xl grande:max-w-[1380px] min-h-[90vh] py-16 mt-16'>
          <Separador />
          <h2 className='text-[white] mb-8 md:mb-16 lg:mb-8'>Soluções Personalizadas para Cada Projeto</h2>
          <p className='max-w-[800px] text-white-contraste text-xl sm:text-2xl ml-4'>Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.</p>
          <div className='flex gap-2 mt-auto'>
            <img className='w-4 ml-4' src={mouseIcon} alt='Icone Mouse' />
            <p className='text-white-contraste'>Continue navegando</p>
          </div>
          
        </div>
      </div>

      <Card
        titulo={'Design Personalizado'}
        descricao={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
        }
        img={circo}
        variant={false}
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