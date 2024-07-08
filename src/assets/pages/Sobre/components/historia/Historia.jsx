import {  motion } from "framer-motion";
import { dataHistoria } from "./dataHistoria";

const Historia = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 2 } },
  };

  const dots = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,  transition: { delay: 0.95} },
  }

  const descricao = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity:1 , transition: { delay: 0.65, duration: 1.1 } },
  }

  return (
    <div className="w-maxW max-w-hd grande:max-w-grande mx-auto">
      <div className="relative flex flex-col">

        {dataHistoria.map((dado, index) => (
          <motion.div
            className="relative flex w-full"
            key={index}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex w-full md:flex-row items-center ">
              {/*line red */}
              <motion.div
                className="absolute left-0 top-0 w-[6px] bg-red-default h-full"
                variants={item}
              ></motion.div>

              {/*Bolinha */}
              <motion.div className="z-10 flex  relative left-[-10px] md:left-[-11px]" variants={dots}>
                <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-default rounded-full flex items-center justify-center border-4 border-red-default ">
                </div>
              </motion.div>

              {/* Conteúdo */}
              <div className="flex flex-col md:flex-row gap-2 w-full md:pl-4 py-4 items-center">
                <motion.div className="flex flex-col gap-4 w-full" variants={descricao}>
                  <h3 className="text-black-text">{dado.data}</h3>
                  <p className="text-gray-text max-w-[550px]">
                    {dado.descricao}
                  </p>
                </motion.div>

                <motion.div className="mt-4 md:mt-0 md:ml-4" variants={descricao}>
                  <img
                    src={dado.imagem}
                    alt="circo"
                    className="md:max-w-[500px] aspect-[5/3] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Historia;
