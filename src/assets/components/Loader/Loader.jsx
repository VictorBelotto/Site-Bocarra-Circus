import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      <div className="ml-2 text-blue-500">Carregando...</div>
    </div>
  );
};

export default Loader;
