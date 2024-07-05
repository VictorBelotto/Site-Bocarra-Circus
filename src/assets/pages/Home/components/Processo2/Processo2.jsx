import circo from '../../../../images/imagens_circos/1.webp'
import Titulo from '../../../../components/Titulo/Titulo'
import Separador from '../../../../components/Separador/Separador'
import { motion } from 'framer-motion'

const Processo2 = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };
  const item = {
    hidden: { x: '-200%', opacity: 1 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };
  const item2 = {
    hidden: { x: '200%', opacity: 1 },
    visible: { x: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className=' flex flex-col w-maxW max-w-hd grande:max-w-grande items-center  py-16 '
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Separador />
      <Titulo titulo={'Queizy Process'} subtitulo={'Sliced'} variant={'blue'} />
      <div className=' flex flex-col lg:flex-row w-full rounded-lg justify-between gap-8 overflow-hidden'>
        <div className='flex flex-col gap-4 overflow-hidden'>
          <motion.img
            variants={item}
            src={circo}
            alt='Imagem Circo'
            className='w-full lg:w-[700px] max-h-[400px] object-cover'
          />
          <motion.p
            variants={item}
            className='text-red-default text-base italic justify-self-end text-end'
          >
            mudar aqui para video
          </motion.p>
        </div>
        <motion.div className='flex flex-col  gap-4 lg:mt-0' variants={item2}>
          <h3 className='text-[white]' >Nossa Etapa Tal</h3>
          <p className='w-full text-white-contraste  mb-6 lg:mb-0 lg:max-w-[460px] indent-4'>
            Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Processo2