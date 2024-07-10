import Separador from '../../components/Separador/Separador'
import ContinueNavegando from '../../components/continueNavegando/ContinueNavegando'
import Historia from './components/historia/Historia'
import Missao from './components/missao/Missao'
import { motion } from 'framer-motion'

const Sobre = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className='flex flex-col w-full items-center mb-32' >
      <section className="flex w-full bg-blue-default justify-center ">
        <motion.div
          className="w-maxW max-w-hd grande:max-w-grande min-h-screen pt-36 flex flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Separador />
          <motion.h2 className="text-[white] mb-8 md:mb-16 lg:mb-8" variants={item}>Conheça nossa história</motion.h2>
          <motion.p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl' variants={item}>
            Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.
          </motion.p>
          <ContinueNavegando />

        </motion.div>
      </section>
      <div className='flex w-full justify-center my-16'>
        <Historia />
      </div>


      <section className="flex w-full bg-blue-default justify-center ">
        <Missao />
      </section>



    </main>
  )
}

export default Sobre