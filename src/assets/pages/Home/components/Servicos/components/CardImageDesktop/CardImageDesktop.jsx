import { LazyLoadImage } from 'react-lazy-load-image-component';
import arrowRed from '../../../../../../images/icones/arrowRed.svg'
import { Link } from 'react-router-dom';

const CardImageDesktop = ({ img, title, description, ordem, to }) => {
  return (
    <Link to={to} className={`flex flex-col w-full h-full justify-center cursor-pointer  group ${ordem} `} >
      <div className='w-full aspect-[4/3] overflow-hidden'>
        <LazyLoadImage
          wrapperClassName='w-full h-full transform transition duration-300 group-hover:scale-110'
          className='w-full h-full transform transition duration-300 group-hover:scale-110'
          src={img}
          alt={`Imagem ${title}`}
        />
      </div>
      <div className='flex flex-col h-auto'>
        <h4 className='text-[white] mt-6 mb-2'>{title}</h4>
        <p className='pr-11 text-white-contraste'>{description}</p>
        <img className='w-11 justify-self-end min-h-[100px] transition-transform duration-300 ease-in-out transform group-hover:translate-x-5' src={arrowRed} alt='Arrow' />
      </div>

    </Link>
  );
};

export default CardImageDesktop;