import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Titulo = ({ titulo, subtitulo, variant }) => {
  const [inView, setInView] = React.useState(false)

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

  const titleClass = variants[variant].title;
  const subClass = variants[variant].sub;
  

  return (
    <motion.div className='flex w-full'
      whileInView={()=> setInView(true)} 
    >
    <motion.div
      className="w-full mb-8"
      initial={{ x: '-100vw' }}   // Inicia fora da tela à esquerda
      animate={{ x: inView ? 0 : false }}    // Move para a posição original
      transition={{ duration: 1.1 }} // Duração da animação
      viewport={{ once: true }}    // Animação ocorre apenas uma vez
    >
      <h2 className={classNames('text-base font-bold uppercase', subClass)}>{subtitulo}</h2>
      <h1 className={classNames(titleClass)}>{titulo}</h1>
    </motion.div>
    </motion.div>
  );
};

export default Titulo;
