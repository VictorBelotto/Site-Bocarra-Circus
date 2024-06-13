import React from 'react'
import classNames from 'classnames'

const Titulo = ({titulo, subtitulo, variant}) => {
  const variants ={
    'red':{
      title: 'text-[#d03438]',
      sub: 'text-[#696969]'
    },
    'blue':{
      title: 'text-[#ffffff]',
      sub: 'text-[#d03438]'
    }
  }

  const titleClass = variants[variant].title
  const subClass = variants[variant].sub

  return (
    <div className='w-full mb-8'>
      <h2 className={classNames('text-base font-bold uppercase', subClass)}>{subtitulo}</h2>
      <h1 className={classNames(titleClass)}>{titulo}</h1>
    </div>
  )
}

export default Titulo
