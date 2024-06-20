import CompareImage from './components/CompareImage/CompareImage';
import Titulo from '../../../../components/Titulo/Titulo';
import CardsProcesso from './components/CardsProcesso/CardsProcesso';

const Processo = () => {
  return (
    <section className='flex flex-col w-maxW max-w-hd grande:max-w-grande justify-center items-center py-16' >
      <Titulo titulo={'Nossas Etapas'} subtitulo={'Processo único e personalizado'} variant={'red'} />

      <div className='flex flex-col w-full gap-16 lg:flex-row lg:justify-between overflow-hidden lg:items-center'>
        <CardsProcesso />
        <CompareImage />
      </div>
    </section>
  )
}

export default Processo