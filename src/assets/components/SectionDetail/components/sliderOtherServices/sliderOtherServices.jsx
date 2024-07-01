import { useEffect, useRef } from 'react'
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const SliderOtherServices = ({ sectionsData }) => {
  const carouselRef = useRef(null)
  const { id } = useParams();

  const container = {
    hidden: { opacity: 0, scale: 0, },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4
      }
    }
  }
  const item = {
    hidden: { y: 40, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
      scale: 1,
    }
  }

  useEffect(() => {
    const options = {
      infinite: true,
      Autoplay: {
        timeout: 4000,
      },
      Navigation: true,
    }
    const carousel = new Carousel(carouselRef.current, options, {
    })

    return () => {
      carousel.destroy();
    };
  }, [])

  const filteredSectionsData = sectionsData.filter(data => data.id !== id);

  return (
    <motion.div
      className='f-carousel f-carousel-btn-white overflow-hidden h-full'
      ref={carouselRef}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >

      {filteredSectionsData.map((data, index) => {
        return (
          <motion.div
            key={index}
            className='f-carousel__slide f-carousel-slide-other overflow-hidden group'
            variants={item}
          >
            <Link to={`/servicos/${data.id}`} className='flex flex-col w-fit justify-center'>
              <img
                src={data.imagens[0]}
                alt={data.id}
                className='w-auto  aspect-[4/3] object-cover hover:scale-105 hover:brightness-50  transition duration-300'
              />

              <h4 className='text-[white] absolute w-full text-center hidden group-hover:block pointer-events-none transform transition duration-300'>{data.titulo}</h4>
            </Link>
          </motion.div>
        );

      })}
    </motion.div>
  )
}

export default SliderOtherServices