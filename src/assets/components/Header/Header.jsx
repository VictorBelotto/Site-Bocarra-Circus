import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import escritaBranca from '../../images/bocarra_visual/escritaBranca.svg';
import Nav from '../Nav/Nav';
import MenuSideBar from '../MenuSideBar/MenuSideBar';
import Logo from '../Logo/Logo';

const Header = () => {
  const location = useLocation();

  const variants = {
    hidden: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className='relative w-full'>
      <div className={`w-full z-20 bg-transparent absolute top-0`}>
        <motion.header
          className={`flex w-full justify-center `}
          initial="visible"
          animate="visible"
          variants={variants}
          key={location.pathname}
        >
          <div className='flex w-maxW max-w-hd grande:max-w-grande py-2 justify-between items-center relative'>
            <Logo escrita={escritaBranca} />
            {window.innerWidth < 968 ? <MenuSideBar /> : <Nav />}
          </div>
        </motion.header>
      </div>
    </div>

  );
};

export default Header;
