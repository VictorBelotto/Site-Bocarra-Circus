import { motion } from "framer-motion"

const Slogan = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { x: '-200%', opacity: 1 },
    visible: { x: ['-100%', 0], opacity:  1, transition: { duration: 0.3 } },
  };
  const item2 = {
    hidden: { x: '200%', opacity: 1 },
    visible: { x:  ['200%', 0], opacity: 1, transition: { duration: 0.3 } },
  };
  const item3 = {
    hidden: { x: '-200%', opacity: 1 },
    visible: { x: ['-100vw', 0], opacity:  1, transition: { duration: 0.3 } },
  };


  return (
    <motion.div
      className='flex flex-col justify-center items-center w-maxW max-w-hd grande:max-w-grande overflow-hidden my-4'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.hr
        className="border border-red-default w-full self-start my-8"
        variants={item}
      />
      <motion.h3
        className='text-center my-2'
        variants={item2}
      >
        Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!
      </motion.h3>

      <motion.hr
        className="border border-red-default w-full self-end my-8"
        variants={item3}
      />
    </motion.div>
  )
}

export default Slogan