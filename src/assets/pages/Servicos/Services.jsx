import Card from './components/Card/Card';
import { servicesData } from './servicesData/servicesData';
import Separador from '../../components/Separador/Separador';
import ContinueNavegando from '../../components/continueNavegando/ContinueNavegando';
import { motion } from 'framer-motion'

const Services = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className='flex flex-col w-full items-center mb-32'>
      <motion.div
        className='flex w-full bg-blue-default justify-center '
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex flex-col w-maxW max-w-hd grande:max-w-grande h-screen pt-32 overflow-hidden'>
          <Separador />
          <motion.h2 className='text-[white] mb-8 md:mb-16 lg:mb-8' variants={item} >Soluções personalizadas para cada projeto</motion.h2>
          <motion.p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl' variants={item}>
            Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.
          </motion.p>
          <ContinueNavegando />
        </div>
      </motion.div>

      {servicesData.map((data) => (
        <Card
          key={data.id}
          to={data.to}
          titulo={data.titulo}
          descricao={data.descricao}
          img={data.img}
          variant={data.variant}
        />
      ))}


    </main>
  );
};

export default Services;
