import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({label, link}) => {
  return (
    <Link to={link} className='px-6 py-2 w-fit bg-red-default hover:bg-red-hover text-slate-100 uppercase text-lg rounded-lg'>
      {label}
    </Link>
  )
}

export default ButtonLink