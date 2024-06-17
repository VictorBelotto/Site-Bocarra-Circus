import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='titlesFont text-xl font-medium'>
      <ul className='flex gap-7 items-center font-semibold rounded-lg pl-4 text-[white]'>
        <li className=' hover:text-red-default'>
          <Link to={'/'}>Home</Link>
        </li>
        
        <li className=' hover:text-red-default'>
          <Link to={'/servicos'}>Serviços</Link>
        </li>

        <li className=' hover:text-red-default'>
          <Link to={'/sobre'} >Sobre Nós</Link>  
        </li>

        <li className='px-4 py-2 bg-red-default rounded-lg text-slate-100 hover:bg-red-hover'>
          <Link to={'/contato'}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav