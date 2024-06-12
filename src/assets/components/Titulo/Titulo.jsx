import React from 'react'

const Titulo = ({titulo, subtitulo}) => {
  return (
    <div className='w-full mb-8'>
      <h1 className='text-red-default mb-12'>{titulo}</h1>
      <h2 className='text-blue-text ml-4'>{subtitulo}</h2>
    </div>
  )
}

export default Titulo
