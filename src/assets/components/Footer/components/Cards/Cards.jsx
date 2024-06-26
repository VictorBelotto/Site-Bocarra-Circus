import { Link } from 'react-router-dom';
import arrowRed from '../../../../images/icones/arrowRed.svg'

const Cards = ({titulo, label, to}) => {
  return (
    <div className='flex group'>
      <Link 
        to={to}
      >
      <div className='flex flex-col h-36 w-32 '>
        <hr className='border-white-contraste'/>
        <h4 className='mt-3' >{titulo}</h4>
          <p className='text-white-contraste text-base'>{label}</p>
          
          <img src={arrowRed} alt='Flecha' className='w-10 mt-auto transition-transform duration-300 ease-in-out transform group-hover:translate-x-4'/>
        </div>
      </Link>
    </div>
  )
}

export default Cards