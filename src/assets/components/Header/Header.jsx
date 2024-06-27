import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import escritaBranca from '../../images/bocarra_visual/escritaBranca.svg';
import Nav from '../Nav/Nav';
import MenuSideBar from '../MenuSideBar/MenuSideBar';
import Logo from '../Logo/Logo';

const Header = () => {
  const [scrollPos, setScrollPos] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  const [position, setPosition] = React.useState('fixed');
  const [classe, setClasse] = React.useState('')
  const location = useLocation();

  React.useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPos(currentScrollPos);
      if (currentScrollPos < 200) {
        setHidden(false);
        setClasse('')
      } else if (currentScrollPos > prevScrollPos) {
        setHidden(true);
      } else {
        setHidden(false);
        setClasse('bg-blue-default')
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  React.useEffect(() => {
    if (location.pathname !== '/') {
      setPosition('fixed');
    } else if (location.pathname === '/') {
      setPosition('fixed ');
    }
  }, [location.pathname]);

  const variants = {
    hidden: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`w-full z-20 ${position}`}>
      <motion.header
        className={`flex w-full justify-center ${position} ${classe}`}
        initial="visible"
        animate={hidden ? 'hidden' : 'visible'}
        variants={variants}
      >
        <div className='flex  w-maxW max-w-hd grande:max-w-grande py-2 justify-between items-center'>
          <Logo escrita={escritaBranca} />
          { window.innerWidth < 968 ? <MenuSideBar /> : <Nav />}
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
