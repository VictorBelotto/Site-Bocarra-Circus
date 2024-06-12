import React from 'react'
import CircoChrys from '../../../../images/bocarra_visual/CircoChrysostenes.jpg'
import Titulo from '../../../../components/Titulo/Titulo'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
const Origem = () => {
  return (
    <section className=' flex flex-col w-[95%] max-w-7xl items-center mb-12'>
     <hr className=" border border-red-default w-1/4 self-start mb-32 mt-12"/>
      <Titulo titulo={'Origem Circense'}  subtitulo={'Desde 1960'} />

      <div className=' flex flex-col lg:flex-row w-full max-w-7xl   rounded-lg justify-between gap-12'>
        <div className='flex flex-col gap-4'>
          <img src={CircoChrys} alt='Imagem Circo Chrysostenes' className='w-full  lg:max-w-[750px] max-h-[400px]'/>
          <p className='italic text-sm text-red-default justify-self-end ml-auto'>Circo Chrysostenes 1984</p>
        </div>
        <div className='flex flex-col mt-0 gap-4 lg:mt-0 px-4'>
          <h3 className='text-blue-default' >Tradição e Inovação</h3>
          <p className='w-[95%] text-gray-text mb-6 lg:mb-0 lg:max-w-96 md:max-w-full'>
            Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
          </p>
        </div>
      </div>
     
      <hr className="border border-red-default w-1/4 self-end mt-32"/>
    </section>
  )
}

export default Origem