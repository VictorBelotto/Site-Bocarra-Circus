// src/components/Transition/Transition.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);
  console.log()

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1,  transition: { duration: 0.6 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
      className='overflow-x-hidden scrol'
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
