import { Helmet } from 'react-helmet-async';
import Separador from '../../../assets/components/Separador/Separador.jsx'
import Endereco from './components/endereco/Endereco'
import Formulario from './components/formulario/Formulario.jsx'
import { motion } from 'framer-motion'

const Contato = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
      },
    },
  };

  const itemY = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };

  const skeleton = {
    hidden: { width: '100%', opacity: 1 },
    visible: { width: '0%', opacity: 1, transition: { duration: 0.5, delay: 0.55 } },
  }


  return (
    <section className='flex flex-col pb-32  items-center'>
      <Helmet>
        <title>Entre em contato</title>
        <meta name="description" content="Alguma descrição contato" />
        <meta property="og:title" content="Contato" />
        <meta name="keywords" content="Circo, Lonas, Bocarra Circus, Tradição, Inovação, bocarra circus site, homepage bocarra, bocarra, circus brasil, fabricante de lonas" />
        <meta name="author" content="Bocarra Circus" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bocarracircus.com/contato" />
        <meta property="og:description" content="Entre em contato" />
      </Helmet>
      <motion.div
        className='w-full pt-32 bg-blue-default flex flex-col items-center min-h-screen'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-maxW max-w-hd grande:max-w-grande">
          <Separador />
          <motion.h2 className='text-[white] mb-8 md:mb-16 lg:mb-8 ' variants={itemY}>Fale conosco</motion.h2>
          <motion.p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl' variants={itemY}>
            Estamos aqui para ajudar! Quer saber mais sobre nossos produtos e serviços? Preencha o formulário abaixo ou mande uma mensagem via Whatsapp. Nossa equipe responderá o mais rápido possível.
          </motion.p>

        </div>

      </motion.div>

      <motion.div
        className='py-16 w-full flex justify-center'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        <motion.div className='w-maxW  max-w-hd grande:max-w-grande h-[450px] bg-white-contraste' >
          <motion.div className='w-full h-[450px] bg-gray-text' variants={skeleton}></motion.div>
        </motion.div>
      </motion.div>

      <Formulario />
      <Endereco />

    </section>
  )
}

export default Contato