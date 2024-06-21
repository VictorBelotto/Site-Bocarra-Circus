import { useEffect, useRef } from 'react'
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
const SliderOtherServices = ({ sectionsData }) => {
  const carouselRef = useRef(null)
  const { id } = useParams();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4
      }
    }
  }
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
      className='f-carousel f-carousel-btn-white overflow-hidden'
      ref={carouselRef}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >

      {filteredSectionsData.map((data, index) => {
        return (
          <motion.div
            key={index}
            className='f-carousel__slide f-carousel-slide-other overflow-hidden group'
            variants={item}
          >
            <Link to={`/servicos/${data.id}`} className='flex flex-col w-fit justify-center'>
              <LazyLoadImage
                src={data.imagens[0]}
                alt={data.id}
                className='w-auto  aspect-[4/3] object-cover hover:scale-105 hover:brightness-50  transition duration-300'
                wrapperClassName='w-auto  aspect-[4/3] object-cover'
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