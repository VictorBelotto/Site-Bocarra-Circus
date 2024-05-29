import React from 'react'
import cricoDosSonhos from '../../../../images/imagens_galeria/cricoDosSonhos.png'
import portoRico from '../../../../images/imagens_galeria/portoRico.png'
import circoFantastico from '../../../../images/imagens_galeria/circoFantastico.png'
import circoImperio from '../../../../images/imagens_galeria/circoImperio.png'
import circoDosSonhos2 from '../../../../images/imagens_galeria/circoDosSonhos2.png'
import circoGlobo from '../../../../images/imagens_galeria/circoGlobo.png'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink.jsx'
import Titulo from '../../../../components/Titulo/Titulo.jsx'

const MiniGaleria = () => {
  return (
    <section className='flex flex-col w-[95%] max-w-7xl mb-8 gap-6 items-center'>
      <Titulo subtitulo={'galeria'} titulo={'alguns projetos'}/>

      <main className='flex flex-col gap-2 text-xl w-full overflow-hidden'>
        <div className='flex gap-2 md:justify-between'>
          <img className='w-1/4' src={portoRico} alt="Imagem circo Porto Rico" />
          <img className='w-2/4' src={cricoDosSonhos} alt="Imagem circo dos sonhos" />
          <img className='w-1/4' src={circoFantastico} alt="Imagem circo fantastico" />
        </div>
        <div className='flex'>
          <img className='w-full' src={circoImperio} alt="Imagem circo Porto Rico" />
        </div>
        <div className='flex gap-2'>
          <img className='w-4/5' src={circoDosSonhos2} alt="Imagem circo Porto Rico" />
          <img className='w-1/4 ' src={circoGlobo} alt="Imagem circo dos sonhos" />
        </div>
      </main>

      <div className='flex self-center mt-6'>
        <ButtonLink label={'Veja mais'} link={'/'} /> 
      </div>  
    </section>
  )
}

export default MiniGaleria