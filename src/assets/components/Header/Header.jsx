import React from 'react'
import Logo from '../../images/bocarra_visual/logoBranca.svg'
import Nav from '../Nav/Nav'
import MenuSideBar from '../MenuSideBar/MenuSideBar'

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
     const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='flex w-full justify-center fixed z-30'>
      <div className='flex w-full max-w-[1920] py-2 px-4 justify-between items-center'>
        <img className='w-72' src={Logo} alt="Logo Bocarra Circus" />

    {windowWidth < 500? <MenuSideBar/> : <Nav/>}

      </div>
    </header>
  )
}

export default Header