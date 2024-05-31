import React from 'react'
import CircoChrys from '../../../images/bocarra_visual/CircoChrysostenes.jpg'
import Titulo from '../../../components/Titulo/Titulo'
const Origem = () => {
  return (
    <div className=' flex flex-col w-[95%] max-w-7xl mt-16 mb-16 '>
      <Titulo subtitulo={'desde 1960'} titulo={'origem circense'}/>

      <div className='flex-col lg:flex-row w-[95%] max-w-7xl shadow-md flex px-6 py-6 rounded-l justify-between'>
        <div className='flex flex-col gap-4'>
          <img src={CircoChrys} alt='Imagem Circo Chrysostenes' className='w-[750px] rounded-lg'/>
          <h2 className='font-semibold text-red-800 text-2xl'>Circo Chrysostenes 1984</h2>
        </div>
        <div className='flex mt-8 lg:mt-0'>
          <p className='w-[95%] max-w-96 text-gray-900'>
            Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Origem