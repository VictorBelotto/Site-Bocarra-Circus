import CompareImage from './components/CompareImage/CompareImage';
import Titulo from '../../../../components/Titulo/Titulo';
import CardsProcesso from './components/CardsProcesso/CardsProcesso';
import { motion } from 'framer-motion';

const Processo = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.section
      className='flex flex-col w-maxW max-w-hd grande:max-w-grande justify-center items-center py-16'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Titulo titulo={'Nossas Etapas'} subtitulo={'Processo único e personalizado'} variant={'red'} />

      <div className='flex flex-col w-full gap-16 lg:flex-row lg:justify-between overflow-hidden lg:items-center'>
        <CardsProcesso />
        <CompareImage />
      </div>
    </motion.section>
  )
}

export default Processo