import React from 'react'
import CircoChrys from '../../../../images/bocarra_visual/CircoChrysostenes.jpg'
import Titulo from '../../../../components/Titulo/Titulo'

const Origem = () => {
  return (
    <section className=' flex flex-col w-[95%] max-w-7xl grande:max-w-[1380px] items-center pb-16'>
      <Titulo titulo={'Origem Circense'}  subtitulo={'Desde 1960'} variant={'red'} />

      <div className=' flex flex-col lg:flex-row w-full  justify-between gap-12'>
        <div className='flex flex-col gap-4'>
          <img src={CircoChrys} loading="lazy" alt='Imagem Circo Chrysostenes' className='w-full  lg:max-w-[750px] max-h-[400px]'/>
          <p className='italic text-base text-red-default justify-self-end ml-auto'>Circo Chrysostenes 1984</p>
        </div>
        <div className='flex flex-col mt-0 gap-4 lg:mt-0 px-4'>
          <h3 className='text-blue-default' >Tradição e Inovação</h3>
          <p className='w-[95%] text-gray-textlg:mb-0 lg:max-w-[520px] md:max-w-full'>
            Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
          </p>
        </div>
      </div>
     
    </section>
  )
}

export default Origem