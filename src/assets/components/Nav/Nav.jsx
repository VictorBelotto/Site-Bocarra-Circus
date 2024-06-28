import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {

  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { x: -60, opacity: 0, scale: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'linear',
        duration: 0.27,
        x: { duration: 0.27 },
        opacity: { duration: 0.27 },
        scale: { duration: 0.27 }
      }
    }
  }

  return (
    <motion.nav
      className='titlesFont text-xl font-medium'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <ul className='flex gap-7 items-center font-semibold rounded-lg pl-4 text-[white] overflow-hidden'>
        <li className='hover:text-red-default overflow-hidden'>
          <motion.div variants={item}>
            <Link to={'/'}>Home</Link>
          </motion.div>
        </li>

        <li className='hover:text-red-default overflow-hidden'>
          <motion.div variants={item}>
            <Link to={'/servicos'}>Serviços</Link>
          </motion.div>
        </li>

        <li className='hover:text-red-default overflow-hidden'>
          <motion.div variants={item}>
            <Link to={'/sobre'}>Sobre Nós</Link>
          </motion.div>
        </li>

        <li>
          <motion.div variants={item} className='px-5 py-2 bg-red-default rounded-lg text-[white] hover:bg-red-hover uppercase overflow-hidden'>
            <Link to={'/contato'}>Contato</Link>
          </motion.div>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
