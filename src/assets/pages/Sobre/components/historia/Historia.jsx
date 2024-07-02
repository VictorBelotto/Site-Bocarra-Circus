import { useEffect, useRef } from "react"
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { dataHistoria } from "./dataHistoria";

const Historia = () => {
  const carouselRef = useRef(null)
  

  useEffect(() => {
    const options= {
     
    }

    const carousel = new Carousel(carouselRef.current, options);

    return () => {
      carousel.destroy();
    };
  }, []);

  return (
    <div className="w-maxW max-w-hd grande:max-w-grande">
      <div ref={carouselRef} className=" f-carousel">
        {dataHistoria.map((dado, index) => (
          <div className='relative f-carousel__slide' key={index}>
            <div className="flex w-full">
              <div className="flex md:flex-col gap-2 w-full">
                <h3 className="text-black-text">{dado.data}</h3>
                <p className="text-gray-text max-w-[600px]">
                  {dado.descricao}
                </p>
              </div>
              <div>
                <img src={dado.imagem} alt="circo" className="max-w-[600px] aspect-[4/3]" />
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>

  )
}

export default Historia