// src/components/Transition/Transition.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Remove this line if you don't want to scroll to the top on route change
  }, [location]);

  const variants = {
    initial: { opacity: 1, y: '-100vh' },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
