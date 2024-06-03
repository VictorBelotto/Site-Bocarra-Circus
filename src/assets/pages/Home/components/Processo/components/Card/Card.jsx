import React from 'react'

const Card = ({icon: Icon, title, text}) => {
  return (
    <div className='flex flex-col items-center gap-2 w-[170px]' key={title}>

      <Icon className='w-12 h-12' />
      
      <h3 className='text-xl font-semibold text-red-default lg:text-2xl'>{title}</h3>
      <p className='text-center text-sm lg:text-base'>
        {text}
      </p>
    </div>
  )
}

export default Card