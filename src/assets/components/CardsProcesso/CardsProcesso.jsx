import React from 'react'
import Card from './components/Card'
import ImgProjeto from '../../images/card_processo/projeto.png'
import ImgInstalacao from '../../images/card_processo/montagem.png'
import ImgMontada from '../../images/card_processo/montada.png'
import ButtonLink from '../ButtonLink/ButtonLink'

const CardsProcesso = () => {
  return (
    <section className='flex flex-col items-center max-w-7xl mb-8 gap-6'>
      <hr class=" border border-red-default w-1/4 self-start"/>
      <hr class=" border border-red-default w-1/4 self-end"/>
      <div className='self-start'>
        <h3 className='subtitulo'>único</h3>
        <h2 className='titulo'>nosso processo</h2>
      </div>

    <div className='flex items-center justify-center w-full flex-wrap gap-8'>
      <Card
        titulo={'Projeto Personalizado'}
        descricao={'Com base nos requisitos levantados, criamos um projeto abrangente e personalizado. Nossa equipe utiliza programas de modelagem 3D para garantir precisão e inovação em cada detalhe.'}
        imagem={ImgProjeto}
      />

      <Card
        titulo={'Instalação Inicial'}
        descricao={'Realizamos a primeira instalação para garantir que tudo esteja dentro dos conformes. Nossa abordagem é proativa, visando resolver qualquer problema potencial antes mesmo de ocorrer.'}
        imagem={ImgInstalacao}
      />

      <Card
        titulo={'Compromisso com a qualidade'}
        descricao={'Desde o pedido inicial até as verificações pós-projeto, nosso compromisso é fornecer um serviço profissional abrangente. Buscamos continuamente o mais alto nível de qualidade para cada projeto'}
        imagem={ImgMontada}
      />
    </div>
    <ButtonLink
      label={'Saiba mais'}
      link={'/'}
    />

    </section>
  )
}

export default CardsProcesso