import Separador from "../../../../components/Separador/Separador"
import { dataMissao } from "./dataMissao"
import { motion } from "framer-motion";

const Missao = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.39 } },
  };
  const item2 = {
    hidden: { x: '-200%', opacity: 0 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.39 } },
  };

  return (
    <motion.section
      className="w-maxW max-w-hd grande:max-w-grande min-h-screen py-16 flex flex-col overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.38 }}
    >
      <Separador />
      <motion.h2 className="text-[white] mb-12" variants={item2}>Nossa missão, visão e valores</motion.h2>

      <div className="flex w-full flex-col md:flex-row md:justify-between items-center gap-12" >
        {dataMissao.map((dado, index) => (
          <motion.div className="flex flex-col items-center max-w-80 gap-3" key={index} variants={item}>
            <div className="w-32 h-32 bg-gray-700"></div>
            <h3 className="text-[white]">{dado.titulo}</h3>
            <p className="text-center text-white-contraste">{dado.descricao}</p>
          </motion.div>
        ))}
      </div>

    </motion.section>
  )
}

export default Missao