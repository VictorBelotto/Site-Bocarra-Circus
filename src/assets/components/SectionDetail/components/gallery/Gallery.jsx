import { motion } from 'framer-motion'

const Galerry = ({ section }) => {
  console.log('rend no')
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4
      }
    }
  }
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  return (
    <motion.div
      className='flex flex-wrap gap-2 md:gap-3'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once : true, amount: 0.35 }}
    >
      {section.imagens.map((src, index) => (
        <motion.a href={src} data-fancybox="gallery" data-caption={`Imagem ${index + 1}`} key={index}
         variants={item}
          className="flex w-[calc((100%/2)-8px)] md:w-[calc((100%/3)-12px)] lg:w-[calc((100%/4)-12px)]"        
        >

          <img
            className='h-[130px] md:h-[200px] w-full cursor-pointer object-cover'
            src={src}
            alt={`Imagem ${index + 1}`}
          />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Galerry 