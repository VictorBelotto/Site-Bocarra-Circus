import React from 'react';
import arrow from '../../../../../../images/icones/arrow.svg'
import arrowRed from '../../../../../../images/icones/arrowRed.svg'


const CardImageDesktop = ({ img, title, description, ordem }) => {
  return (
    <div className={`flex flex-col h-[500px] sm:h-[570px] justify-center w-[50%] lg:w-[20%]  cursor-pointer  group ${ordem} `} >
      <div className='w-full aspect-[5/4] overflow-hidden'>
        <img
          className='w-full h-full  transform transition duration-300 group-hover:scale-110'
          src={img}
          alt={`Imagem ${title}`}
        />
      </div>
      <div className='flex flex-col h-auto'>
        <h4 className='text-blue-text mt-6 mb-2'>{title}</h4>
        <p className='pr-11 text-gray-text'>{description}</p>
        <img className='w-11 justify-self-end min-h-[100px] transition-transform duration-300 ease-in-out transform group-hover:translate-x-5' src={arrowRed} alt='Arrow'/>
      </div>
        
      </div>
  );
};

export default CardImageDesktop;