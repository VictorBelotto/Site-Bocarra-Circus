import React from 'react'
import CircoChrys from '../../../../images/bocarra_visual/CircoChrysostenes.jpg'
import Titulo from '../../../../components/Titulo/Titulo'
const Origem = () => {
  return (
    <section className=' flex flex-col w-[95%] max-w-7xl items-center'>
     <hr className=" border border-red-default w-1/4 self-start mb-16"/>
      <Titulo subtitulo={'desde 1960'} titulo={'origem circense'}/>

      <div className=' flex flex-col lg:flex-row w-[95%] max-w-7xl shadow-lg  px-6 py-6 rounded-lg justify-between'>
        <div className='flex flex-col gap-4'>
          <img src={CircoChrys} alt='Imagem Circo Chrysostenes' className='w-[750px] rounded-lg'/>
          <h3 className='font-semibold text-slate-900 text-xl'>Circo Chrysostenes 1984</h3>
        </div>
        <div className='flex flex-col mt-8 gap-4 lg:mt-0'>
          <h2 className='text-2xl font-semibold text-blue-default' >Tradição e Inovação</h2>
          <p className='w-[95%] text-slate-800 text-base mb-6 lg:mb-0 lg:max-w-96 md:max-w-full'>
            Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
          </p>
        </div>
      </div>
      <hr className="border border-red-default w-1/4 self-end mt-16"/>
    </section>
  )
}

export default Origem