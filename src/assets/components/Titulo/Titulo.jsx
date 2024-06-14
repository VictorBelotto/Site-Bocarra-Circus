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
    <motion.div className='flex flex-col w-full mb-12'
      whileInView={()=> setInView(true)} 
    >
   
      <motion.h2 
        className={classNames('text-base font-bold uppercase', subClass)}
        initial={{ x: '-100vw' }}   
        animate={{ x: inView ? 0 : false }}    
        transition={{ duration: 0.9 }} 
        viewport={{ once: true }} 
      >
        {subtitulo}
      </motion.h2>

      <motion.h1 
        className={classNames(titleClass)}
        initial={{ x: '-100vw' }}   // Inicia fora da tela à esquerda
        animate={{ x: inView ? 0 : false }}    // Move para a posição original
        transition={{ duration: 1.1 }} // Duração da animação
        viewport={{ once: true }} 
      >
        {titulo}
      </motion.h1>
    
    </motion.div>
  );
};

export default Titulo;
