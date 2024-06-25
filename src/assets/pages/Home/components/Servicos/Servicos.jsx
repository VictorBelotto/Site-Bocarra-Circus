import { motion } from 'framer-motion';
import CardImageDesktop from './components/CardImageDesktop/CardImageDesktop';
import Titulo from '../../../../components/Titulo/Titulo';
import Separador from '../../../../components/Separador/Separador';
import { cardData } from './cardData';

const Servicos = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },

  };
  console.log('services')
  return (
    <motion.div
      className="flex flex-col w-maxW max-w-hd grande:max-w-grande justify-center items-center py-16 min-h-100px"
      variants={container}
      initial="hidden"
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <Separador />
      <Titulo titulo={'Nossos Serviços'} subtitulo={'Mais de 30 anos de experiência'} variant={'blue'} />
      <div
        className="flex w-full flex-wrap overflow-hidden justify-center min-h-[100px]"
      >
        {cardData.map((card, index) => (
          <motion.div key={index} variants={item} className={`overflow-hidden sm:max-h-[650px] lg:h-fit ${card.width} lg:w-[20%] `}>
            <CardImageDesktop
              img={card.img}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Servicos
