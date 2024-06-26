import { motion } from "framer-motion";

const Card = ({ icon: Icon, title, text }) => {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      variants={item}
      className='flex flex-col  gap-2 w-[150px] md:w-[190px] lg:w-[150px] items-center'
      key={title}
    >
      <Icon className='w-12 h-12 text-blue-default' />
      <h4 className=' text-red-default'>{title}</h4>
      <p className=' text-gray-text text-sm text-center'>
        {text}
      </p>
    </motion.div>
  );
};

export default Card;
