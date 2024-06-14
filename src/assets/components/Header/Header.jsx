import React from 'react'
import LogoBranco from '../../images/bocarra_visual/logoBranca.svg'
import LogoPreto from '../../images/bocarra_visual/L1Preto.svg'
import Nav from '../Nav/Nav'
import MenuSideBar from '../MenuSideBar/MenuSideBar'
import { useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [scrollPos, setScrollPos] = React.useState(0);
  const [classe, setClasse] = React.useState('')
  const [position, setPosition] = React.useState('fixed')
  const [logo, setLogo] = React.useState(LogoBranco)
  let local = useLocation()

  React.useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPos(currentScrollPos);
      if(currentScrollPos < 70){
        setClasse('')
      }
      else if(currentScrollPos > prevScrollPos) {
        setClasse('hidden')
        
      } else {
        setClasse('bgBlur')
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);


  React.useEffect(()=>{
    if(location.pathname !== '/'){
      setPosition('')
      setLogo(LogoPreto)
    }else if(location.pathname === '/'){
      setPosition('fixed')
      setLogo(LogoBranco)
    }
  },[location.pathname])

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
    <header className={`flex w-full justify-center ${position} z-30 ${classe}`}>
      <div className='flex w-full max-w-[1920] py-2 px-4 justify-between items-center'>
        
        <Logo/>

    {windowWidth < 500? <MenuSideBar path={location.pathname}/> : <Nav/>}

      </div>
    </header>
  )
}

export default Header