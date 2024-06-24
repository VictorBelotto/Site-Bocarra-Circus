import classNames from 'classnames';
import { motion } from 'framer-motion';

const Titulo = ({ titulo, subtitulo, variant }) => {
  const variants = {
    red: {
      title: 'text-[#d03438]',
      sub: 'text-[#696969]',
    },
    blue: {
      title: 'text-[#ffffff]',
      sub: 'text-[#d03438]',
    },
  };
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition : { duration : 0.6 }},
  };
  const titleClass = variants[variant].title;
  const subClass = variants[variant].sub;

  return (
    <motion.div
      className='flex flex-col w-full mb-12'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.h2
        className={classNames('text-base font-bold uppercase', subClass)}
        variants={item}
      >
        {subtitulo}
      </motion.h2>

      <motion.h1
        className={classNames(titleClass)}
        variants={item}
      >
        {titulo}
      </motion.h1>
    </motion.div>
  );
};

export default Titulo;
