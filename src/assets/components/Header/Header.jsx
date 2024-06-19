import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import escritaBranca from '../../images/bocarra_visual/escritaBranca.svg';
import Nav from '../Nav/Nav';
import MenuSideBar from '../MenuSideBar/MenuSideBar';
import Logo from '../Logo/Logo';

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
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
        if(location.pathname === '/'){
          setClasse('')
        }
      } else if (currentScrollPos > prevScrollPos) {
        setHidden(true);
      } else {
        setHidden(false);
        if(location.pathname === '/'){
          setClasse('bg-blue-default')
        }
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
      setPosition('bg-blue-default fixed');
    } else if (location.pathname === '/') {
      setPosition('fixed ');
    }
  }, [location.pathname]);

  React.useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Definindo variantes de animação
  const variants = {
    hidden: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } }
  };

  return (
    <div className={`w-full z-20 ${position}`}>
      <motion.header
        className={`flex w-full justify-center ${position} ${classe}`}
        initial="visible"
        animate={hidden ? 'hidden' : 'visible'}
        variants={variants}
      >
        <div className='flex  w-[95%] max-w-7xl grande:max-w-[1380px] py-2 justify-between items-center'>
          <Logo escrita={escritaBranca} />
          {windowWidth < 500 ? <MenuSideBar path={location.pathname} /> : <Nav />}
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
