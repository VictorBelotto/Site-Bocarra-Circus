import Card from './components/Card/Card';
import { servicesData } from './servicesData/servicesData';
import Separador from '../../components/Separador/Separador';
import { motion } from 'framer-motion'
import img1 from "../../images/servicos_banner/1.webp"
import img2 from "../../images/servicos_banner/2.webp"
import img3 from "../../images/servicos_banner/3.webp"
import img4 from "../../images/servicos_banner/7.webp"
import { Helmet } from 'react-helmet-async';


const Services = () => {
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
    <main className='flex flex-col w-full items-center mb-32'>
      <Helmet>
        <title>Veja nossos serviços</title>
        <meta name="description" content="Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente." />
        <meta property="og:title" content="servicos" />
        <meta name="keywords" content="Circo, Lonas, Bocarra Circus, fabricante de lonas, serviços, servicos, " />
        <meta name="author" content="Bocarra Circus" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bocarracircus.com/servicos" />
        <meta property="og:description" content="Veja nossas soluções" />
        <link rel="canonical" href="https://www.bocarracircus.com/servicos" />
      </Helmet>
      <motion.div
        className='flex w-full bg-blue-default justify-center '
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex flex-col w-maxW max-w-hd grande:max-w-grande h-screen pt-36 '>
          <Separador />
          <motion.h2 className='text-[white] mb-8 md:mb-16 lg:mb-8' variants={item} >Soluções personalizadas para cada projeto</motion.h2>
          <motion.p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl' variants={item}>
            Oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.
          </motion.p>

        </div>
      </motion.div>
      <motion.div
        className='w-maxW max-w-hd grande:max-w-grande flex z-10 relative top-[-200px] mb-[-136px]'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img variants={item2} src={img1} alt="banner" className='w-[calc(100%/2)] md:w-[calc(100%/4)] h-[400px] object-cover' />
        <motion.img variants={item2} src={img3} alt="banner" className='w-[calc(100%/4)] h-[400px] object-cover hidden md:block' />
        <motion.img variants={item2} src={img4} alt="banner" className='w-[calc(100%/4)] h-[400px] object-cover hidden md:block' />
        <motion.img variants={item2} src={img2} alt="banner" className='w-[calc(100%/2)] md:w-[calc(100%/4)] h-[400px] object-cover' />
      </motion.div>
      <div className='w-maxW max-w-hd grande:max-w-grande mb-[-32px]'>
        <Separador />
      </div>

      {servicesData.map((data) => (
        <Card
          key={data.id}
          to={data.to}
          titulo={data.titulo}
          descricao={data.descricao}
          img={data.img}
          variant={data.variant}
        />
      ))}


    </main>
  );
};

export default Services;
