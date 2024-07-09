import mouseIcon from '../../../assets/images/bocarra_visual/mouseIcon.svg'
import { motion } from 'framer-motion'

const ContinueNavegando = () => {
  const item = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div className='flex gap-2 mt-auto mb-[calc(100vh-100svh+8px)]' variants={item}>
      <img className='w-4' src={mouseIcon} alt='Icone Mouse' />
      <p className='text-white-contraste'>Continue navegando</p>
    </motion.div>
  )
}

export default ContinueNavegando