import { Link } from 'react-router-dom';
import LogoBocarra from '../../images/bocarra_visual/rino.svg';
import { motion } from 'framer-motion';

const Logo = ({ escrita }) => {
  return (
    <Link to='/' className='flex'>
      <motion.div className='flex'>
        <img className='w-auto h-14 md:h-16' src={LogoBocarra} alt="Logo Bocarra Circus" />
        <div className='flex overflow-hidden'>
          <motion.img
            className='w-44 md:w-48 ml-2'
            src={escrita}
            alt="Bocarra Circus"
            initial={{ x: '-200%' }}
            animate={{ x: ['-200%', 0] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </Link>

  );
};

export default Logo;
