import React from 'react'

const Titulo = ({subtitulo, titulo}) => {
  return (
    <div className='w-full mb-8'>
        <h3 className='subtitulo'>{subtitulo}</h3>
        <h2 className='titulo'>{titulo}</h2>
      </div>
  )
}

export default Titulo
