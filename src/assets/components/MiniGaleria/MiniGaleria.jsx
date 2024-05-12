import React from 'react'
import cricoDosSonhos from '../../../assets/images/imagens_galeria/cricoDosSonhos.png'
import portoRico from '../../../assets/images/imagens_galeria/portoRico.png'
import circoFantastico from '../../../assets/images/imagens_galeria/circoFantastico.png'
import circoImperio from '../../../assets/images/imagens_galeria/circoImperio.png'
import circoDosSonhos2 from '../../../assets/images/imagens_galeria/circoDosSonhos2.png'
import circoGlobo from '../../../assets/images/imagens_galeria/circoGlobo.png'
import ButtonLink from '../ButtonLink/ButtonLink'

const MiniGaleria = () => {
  return (
    <section className='flex flex-col max-w-7xl w-[95%] mb-8 gap-6'>

      <div>
        <h3 className='subtitulo'>galeria</h3>
        <h2 className='titulo'>alguns projetos</h2>
      </div>

      <main className='flex flex-col gap-6 text-xl'>
        <div className='flex gap-6'>
          <img className='w-1/4' src={portoRico} alt="Imagem circo Porto Rico" />
          <img className='w-2/4' src={cricoDosSonhos} alt="Imagem circo dos sonhos" />
          <img className='w-1/4' src={circoFantastico} alt="Imagem circo fantastico" />
        </div>
        <div className='flex'>
          <img className='w-full' src={circoImperio} alt="Imagem circo Porto Rico" />
        </div>
        <div className='flex gap-6'>
          <img className='w-4/5' src={circoDosSonhos2} alt="Imagem circo Porto Rico" />
          <img className='w-1/4' src={circoGlobo} alt="Imagem circo dos sonhos" />
        </div>
      </main>

      <div className='self-center mt-6'>
        <ButtonLink label={'Veja mais'} link={'/'} /> 
      </div>  
    </section>
  )
}

export default MiniGaleria