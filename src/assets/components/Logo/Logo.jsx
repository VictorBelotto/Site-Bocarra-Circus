import React, { useState, useEffect } from 'react';
import LogoBocarra from '../../images/bocarra_visual/rino.svg';
import { motion } from 'framer-motion';

const Logo = ({escrita}) => {
  return (
    <motion.div className='flex'>
      <img className='w-auto h-14 md:h-16' src={LogoBocarra} alt="Logo Bocarra Circus" />
      <div className='flex overflow-hidden'>
        <motion.img
          className='w-44 md:w-48 ml-2'
          src={escrita}
          alt="Bocarra Circus"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;
