import React from 'react';
import { useParams } from 'react-router-dom';
import { sectionsData } from './sectionsData/sectionsData.js';

const SectionDetail = () => {
  const { id } = useParams();
  const section = sectionsData.find(section => section.id === id);

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className='py-32 flex w-full justify-center'>
      <div className='w-[95%] max-w-7xl grande:max-w-[1380px]'>
        <h2>{section.titulo}</h2>
        <p>{section.descricao}</p>
        <div className='flex flex-wrap gap-4 max-w-7xl'>
          {section.imagens.map((src, index) => (
            <img className='h-40 w-auto' key={index} src={src} alt={`Imagem ${index + 1}`} />
          ))}
        </div>
        <div>
        {sectionsData.map((data, index)=>(
        
         
        ))}
        </div>
      </div>

    </div>
  );
};

export default SectionDetail;
