import { useEffect, useRef } from 'react'
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useParams } from 'react-router-dom';

const SliderOtherServices = ({sectionsData}) => {
  const carouselRef = useRef(null)
  const { id } = useParams();

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
  },[])
  
  const filteredSectionsData = sectionsData.filter(data => data.id !== id);

  return (
    <div className='f-carousel overflow-hidden' ref={carouselRef}>
    
      {filteredSectionsData.map((data, index) => {
          return (
            <div key={index} className='f-carousel__slide f-carousel2 overflow-hidden group'>
              <Link to={`/servicos/${data.id}`}  className='flex flex-col w-fit justify-center'>
                <LazyLoadImage
                  src={data.imagens[0]}
                  alt={data.id}
                  className='w-auto  aspect-[4/3] object-cover hover:scale-105 hover:brightness-50  transition duration-300'
                  wrapperClassName='w-auto  aspect-[4/3] object-cover'
                />

                <h4 className='text-[white] absolute w-full text-center hidden group-hover:block pointer-events-none transform transition duration-300'>{data.titulo}</h4>
              </Link>
            </div>
          );
       
        
      })}
    </div>
  )
}

export default SliderOtherServices