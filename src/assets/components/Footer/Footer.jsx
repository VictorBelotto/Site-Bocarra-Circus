import React from 'react'
import {FaWhatsapp  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Logo from '../../images/bocarra_visual/rinoRetangulo.svg'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full justify-center items-center bg-red-default text-slate-100'>
       <section className='flex w-full justify-center bg-blue-default py-3'>
        <div className='flex justify-between w-[95%] max-w-7xl items-center  bg-blue-default'>
          <h3 className='titlesFont'>Conheça nossas redes sociais:</h3>

          <div className='flex' >
            <ul className='flex gap-6'>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bocarracircus/">
                  <FaInstagram  className='text-3xl'/>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5519996924744&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-3xl'/>
                </a>
              </li>
              <li>
                <SiGmail className='text-3xl'/>
              </li>
            </ul>
          </div>
        </div>
       </section>
       <div className='flex'>
          <img className='w-52 py-6' src={Logo} alt="Logo Bocarra Circus" />
       </div>

      <aside className='flex flex-col text-center textsFont pb-3'> 
        <p>&copy; bocarra circus. </p>
        <p>Todos os direitos reservados 2024.</p>
        <a href="https://github.com/VictorBelotto" target="_blank" rel="noopener noreferrer">designed by Victor Belotto</a>
      </aside>

    </footer>
  )
}

export default Footer