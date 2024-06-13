import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../../../../images/icones/arrow.svg'

const Cards = ({titulo, label, to}) => {
  return (
    <div className='flex group'>
      <Link 
        to={to}
      >
      <div className='flex flex-col h-32 w-32 '>
        <hr/>
        <h4 className='mt-2' >{titulo}</h4>
          <p className='text-[#A6A6A6] text-base'>{label}</p>
          
          <img src={arrow} alt='Flecha' className='w-10 mt-auto transition-transform duration-300 ease-in-out transform group-hover:translate-x-4'/>
        </div>
      </Link>
    </div>
  )
}

export default Cards