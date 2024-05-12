import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='titlesFont text-xl font-medium'>
      <ul className='flex gap-7 items-center bgBlur rounded-lg pl-4 text-slate-100'>
        <li className=' hover:text-red-default'>
          <Link to={'/'}>Home</Link>
        </li>
        
        <li className=' hover:text-red-default'>
          <Link to={'/portifolio'}>Portfólio</Link>
        </li>

        <li className=' hover:text-red-default'>
          <Link to={'/sobreNos'} >Sobre Nós</Link>  
        </li>

        <li className='px-4 py-2 bg-red-default rounded-lg text-slate-100 hover:bg-red-hover'>
          <Link to={'/contato'}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav