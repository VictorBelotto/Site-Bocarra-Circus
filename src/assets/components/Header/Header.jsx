import React from 'react'
import Logo from '../../images/bocarra_visual/L1Preto.svg'
import Nav from '../Nav/Nav'
const Header = () => {
  return (
    <header className='flex w-full justify-center'>
      <div className='flex w-full max-w-[1920] py-2 px-4 justify-between items-center'>
        <img className='w-72' src={Logo} alt="Logo Bocarra Circus" />

        <Nav/>
      </div>
    </header>
  )
}

export default Header