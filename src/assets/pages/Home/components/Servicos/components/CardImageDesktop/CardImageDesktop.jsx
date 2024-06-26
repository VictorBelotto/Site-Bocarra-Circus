import arrowRed from '../../../../../../images/icones/arrowRed.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardImageDesktop = ({ img, title, description, ordem, to }) => {
  const container = {
    hidden: {opacity: 1},
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 3 } },
  };
  return (
    <Link to={to} className={`flex flex-col w-full h-full justify-center cursor-pointer  group ${ordem} `} >
      <motion.div
        className='flex flex-col w-full h-full'
        variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='w-full aspect-[4/3] overflow-hidden max-h-[220px] lg:max-h-none'
          variants={item}
     
        >
          <img
            className='w-full h-full transform transition duration-300 group-hover:scale-110 aspect-[4/3] '
            src={img}
            alt={`Imagem ${title}`}
          />
        </motion.div>

        <motion.div className='flex flex-col h-[230px] lg:h-[300px] mb-8' variants={item}>
          <h4 className='text-[white] mt-6 mb-2'>{title}</h4>
          <p className='pr-2 lg:pr-11 text-white-contraste text'>{description}</p>
          <img className='w-11 justify-self-end mt-auto transition-transform duration-300 ease-in-out transform group-hover:translate-x-5' src={arrowRed} alt='Arrow' />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default CardImageDesktop;