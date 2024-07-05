import { useParams } from 'react-router-dom';
import {sectionDataLona} from './SectionsDataLona/SectionDataLona.js'
import ContinueNavegando from '../continueNavegando/ContinueNavegando.jsx';
import Separador from '../Separador/Separador.jsx';
import SliderOtherServices from '../SectionDetail/components/sliderOtherServices/sliderOtherServices.jsx';
import Galerry from './gallery/Gallery.jsx'

const SectionLonas = () => {
  const {id} = useParams()
  const section = sectionDataLona.find(section => section.id === id);

  return (
    <main
    className='flex flex-col w-full justify-center items-center pb-32'
    key={section.id}

  >
    <div className='bg-blue-default flex flex-col w-full min-h-[100vh] items-center'>
      <div className='w-maxW max-w-hd grande:max-w-grande absolute top-[calc(55svh-68px)] md:top-[calc(65svh-98px)]'>
        <h2 className='text-[white] w-fit text-wrap bgBlur px-2 md:px-4'>{section.titulo}</h2>
      </div>

      <img
        src={section.imagens[0]}
        alt={section.titulo}
        className='w-full h-[55svh] md:h-[65svh] object-cover cursor-pointer'
      />
      <div className='w-maxW max-w-hd grande:max-w-grande mt-3 md:mt-6'>
        <p className='max-w-[1000px] text-white-contraste text-lg sm:text-2xl mb-8'>{section.descricao}</p>
      </div>
      <div className='w-maxW max-w-hd grande:max-w-grande'>
        <ContinueNavegando />
      </div>

    </div>
    <div className='w-maxW max-w-hd grande:max-w-grande mt-16'>
      <h3 className=' mb-4'>Galeria</h3>
      <Separador />
      <Galerry section={section}/>

      <div className='flex flex-col gap-4 mt-16'>
        <h3 className='text-red-default'>Veja outros serviços</h3>
        <Separador />
      </div>

      
      <SliderOtherServices section={'circo'} sectionsData={sectionDataLona} />
    </div>
  </main>
  )
}

export default SectionLonas