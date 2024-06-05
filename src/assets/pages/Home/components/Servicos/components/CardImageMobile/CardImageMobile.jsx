import React from 'react'

const CardImageMobile = ({img, label, tamanho}) => {
  return (
    <div className={`relative flex items-center justify-center ${tamanho}`} >
    <div className=' w-full h-full relative'>
      <img
        className='imgBlur w-full h-full object-cover cursor-pointer'
        src={img}
        alt={`Imagem ${label}`}
      />
      <p className=' paragrafo'>{label}</p>
    </div>
  </div>
  )
}

export default CardImageMobile