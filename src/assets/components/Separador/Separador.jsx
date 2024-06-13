import React from 'react'
import { motion } from 'framer-motion'

const Separador = () => {
  const [inView, setInView] = React.useState(false)
  return (
      <motion.div
        className="w-full mb-16"
        whileInView={()=> setInView(true)}  
      >
        <motion.hr 
          className=" border border-red-default w-1/4 self-start "
          initial={{ x: '-100vw' }}   
          animate={{ x: inView ? 0 : false }}    
          transition={{ duration: 1.4 }} 
          viewport={{ once: true }} 
        />
      </motion.div>
  )
}

export default Separador