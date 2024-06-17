import React from 'react'
import { Link } from 'react-router-dom'
import Separador from '../../../../components/Separador/Separador'

const Card = ({ img, titulo, descricao, to, variant }) => {
  const styles ={
    blue: {
      container: 'bg-blue-default',
      title: 'text-[white]',
      text: 'text-white-contraste'
    },
    default: {
      container: '',
      title: 'text-blue-default',
      text: 'text-gray-text'
    },
  }
  const style = variant ? styles.blue : styles.default

  return (
    <container className={`flex w-full justify-center ${style.container} `}>
      <section
        className={`flex flex-col w-[95%] max-w-7xl grande:max-w-[1380px] justify-between py-16`}>

        {variant && (<Separador />)}


        <main className={`flex flex-col lg:flex-row  w-full justify-between ${variant ? 'flex-row-reverse' : ''} gap-4`}>
          <img src={img} alt={titulo} loading="lazy" className=' w-[750px] h-[400px] bg-gray-700 object-cover' />

          <div className='flex flex-col px-4 mt-8 gap-4 lg:mt-0'>
            <h3 className={style.title}>
              {titulo}
            </h3>
            <p className={`indent-4 w-[95%] lg:max-w-[520px] md:max-w-fulllg:max-w-[520px] md:max-w-full ${style.text}`}>
              {descricao}
            </p>
            <Link
              className='uppercase px-4 py-2 rounded-lg bg-red-default hover:bg-red-hover text-[white] font-medium w-fit mt-4 lg:mt-auto'
              to={to}>
              veja mais
            </Link>
          </div>
        </main>
      </section>
    </container>
  )
}

export default Card