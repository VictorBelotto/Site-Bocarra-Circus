import React from 'react'
import LogoBocarra from '../../images/bocarra_visual/rino.svg'
import EscritaBranca from '../../images/bocarra_visual/escritaBranca.svg'

import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.div className='flex'>
      <img className='w-auto h-16 md:h-20' src={LogoBocarra} alt="Logo Bocarra Circus" />
      <div className='flex overflow-hidden'>
        <motion.img 
          className='w-52 md:w-56 ml-2' src={EscritaBranca} alt="Bocarra Circus" 
          initial={{ x: '-100vw' }}   
          animate={{ x: 0 }}    
          transition={{ duration: 1.5 }} 
          viewport={{ once: true }} 
        />
      </div>
   
    </motion.div>
  )
}

export default Logo