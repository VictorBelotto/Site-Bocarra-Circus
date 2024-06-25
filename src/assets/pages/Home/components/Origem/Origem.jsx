import CircoChrys from '../../../../images/bocarra_visual/CircoChrysostenes.webp'
import Titulo from '../../../../components/Titulo/Titulo'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Origem = () => {
  return (
    <section className=' flex flex-col w-maxW max-w-hd grande:max-w-grande items-center pb-16'>
      <Titulo titulo={'Origem Circense'} subtitulo={'Desde 1960'} variant={'red'} />

      <div className=' flex flex-col lg:flex-row w-full justify-between gap-8'>
        <div className='flex flex-col gap-4'>
          <LazyLoadImage
            src={CircoChrys}
            alt='Imagem Circo Chrysostenes'
            className='w-full max-w-[700px] max-h-[400px]'
            wrapperClassName='w-full max-w-[700px] max-h-[400px]'
            effect='opacity'
          />
          <p className='italic text-base text-red-default justify-self-end ml-auto'>Circo Chrysostenes 1984</p>
        </div>
        <div className='flex flex-col mt-0 gap-4 lg:mt-0 '>
          <h3 className='text-black-text' >Tradição e Inovação</h3>
          <p className='w-[95%] ml-4 md:ml-0 text-gray-text lg:mb-0 lg:max-w-[440px] '>
            Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Origem