import React from 'react'
import Titulo from '../../../../components/Titulo/Titulo'
import logos from './scripts/logos.js'
import { motion } from 'framer-motion'

const SliderClientes = () => {
  const [inView, setInView] = React.useState(false)

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <section className='flex flex-col items-center w-[95%] max-w-7xl  mb-32 mt-16 '>
      
      <Titulo  titulo={'Nossos Parceiros'} subtitulo={'Faça parte desta fámilia circense'} variant={'red'} />

      <motion.main 
        className='flex w-full flex-col gap-6 md:gap-16 p-4 md:p-12  bg-[#f0f0f0] rounded-lg'
        variants={container}
        initial="hidden"
        whileInView={()=> setInView(true)}
        animate={inView? 'visible' : false}
      >
        <motion.div 
          className='flex gap-6 justify-between flex-wrap md:flex-nowrap'
        >
          
          {logos.slice(0, 4).map((logo, index) =>(
            
            <motion.img src={logo} loading="lazy" alt={logo} className='w-32 lg:w-44' key={logo} variants={item}/>
          ))}
        </motion.div>
        <motion.div 
          className='flex gap-6 justify-between flex-wrap md:flex-nowrap'
        >
          {logos.slice(4, 8).map((logo, index) =>(
            <motion.img src={logo} loading="lazy" alt={logo} className='w-32 lg:w-44' key={logo} variants={item}/>
          ))}
        </motion.div>
      </motion.main>
      
    </section>
  )
}

export default SliderClientes