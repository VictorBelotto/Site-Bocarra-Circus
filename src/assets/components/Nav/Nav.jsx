import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-7'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        
        <li>
          <Link to={'/portifolio'}>Portfólio</Link>
        </li>

        <li>
          <Link to={'/sobreNos'} >Sobre Nós</Link>  
        </li>

        <li>
          <Link to={'/contato'}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav