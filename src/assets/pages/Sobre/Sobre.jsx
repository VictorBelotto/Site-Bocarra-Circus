import Separador from '../../components/Separador/Separador'
import Historia from './components/historia/Historia'
import Missao from './components/missao/Missao'
import { motion } from 'framer-motion'
import img from '../../images/bocarra_visual/CircoChrysostenes.webp'

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
  const item2 = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
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
            Descubra a trajetória do Bocarra Circus, uma história marcada por tradição, inovação e resiliência. Desde 1961, quando Chrysostenes herdou o circo de seu pai, nossa missão tem sido levar a magia do circo a todos os cantos do país. Com uma dedicação inabalável à arte circense, enfrentamos desafios e abraçamos oportunidades ao longo das décadas.
          </motion.p>

        </motion.div>
      </section>
      <motion.div
        className='w-maxW max-w-hd grande:max-w-grande flex z-10 relative top-[-200px] mb-[-136px]'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img variants={item2} src={img} alt="banner" className='w-[calc(100%/2)] md:w-[calc(100%/4)] h-[400px] object-cover' />
        <motion.img variants={item2} src={img} alt="banner" className='w-[calc(100%/4)] h-[400px] object-cover hidden md:block' />
        <motion.img variants={item2} src={img} alt="banner" className='w-[calc(100%/4)] h-[400px] object-cover hidden md:block' />
        <motion.img variants={item2} src={img} alt="banner" className='w-[calc(100%/2)] md:w-[calc(100%/4)] h-[400px] object-cover' />
      </motion.div>
      <div className='w-maxW max-w-hd grande:max-w-grande mb-[-32px]'>
        <Separador />
      </div>
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