import React from 'react';

const Card = ({ icon: Icon, title, text }) => {
  return (
    <div className='flex flex-col  gap-2 w-[150px] md:w-[190px] lg:w-[150px]' key={title}>
      <Icon className='w-12 h-12' />
      <h4 className=' text-red-default'>{title}</h4>
      <p className=' text-gray-text text-sm'>
        {text}
      </p>
    </div>
  );
};

export default Card;
