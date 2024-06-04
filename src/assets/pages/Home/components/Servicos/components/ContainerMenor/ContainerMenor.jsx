import React from 'react';

const ContainerMenor = ({ img, label }) => {
  return (
    <div className='flex w-full max-w-[16%] overflow-hidden relative justify-center items-center'>
      <img
        className="w-full object-cover hover:cursor-pointer imgBlur h-[270px] overflow-hidden"
        src={img}
        alt={`Imagem ${img}`}
      />
      <p className={`absolute z-30 font-semibold text-3xl text-white paragrafo `}>{label}</p>
    </div>
  );
};

export default ContainerMenor;
