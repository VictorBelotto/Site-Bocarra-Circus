import { useEffect, useRef } from 'react'
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const SliderOtherServices = ({ sectionsData, section }) => {
  const carouselRef = useRef(null)
  const { id } = useParams();

  const link = section === 'servicos' ? `/servicos/` : `/circo/`

  const container = {
    hidden: { opacity: 0, scale: 0, },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.25
      }
    }
  }
  const item = {
    hidden: { y: 40, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.25 },
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
      className='f-carousel f-carousel-btn-white overflow-hidden h-fit'
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
            <Link to={`${link}${data.id}`} className='flex flex-col w-fit justify-center'>
              <img
                src={data.imagens[0]}
                alt={data.id}
                className='w-auto  aspect-[4/3] object-cover hover:scale-105 brightness-50 hover:brightness-100 transition duration-300'
              />

              <h4 className='text-[white] absolute w-full text-center group-hover:hidden pointer-events-none transform transition duration-300 text'>{data.titulo}</h4>
            </Link>
          </motion.div>
        );

      })}
    </motion.div>
  )
}

export default SliderOtherServices