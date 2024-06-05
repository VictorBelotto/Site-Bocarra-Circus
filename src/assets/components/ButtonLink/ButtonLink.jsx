import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({label, link}) => {
  return (
    <Link to={link} className='w-56 py-2 text-center bg-red-default hover:bg-red-hover text-white uppercase text-lg rounded-lg'>
      {label}
    </Link>
  )
}

export default ButtonLink