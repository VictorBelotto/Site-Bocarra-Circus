import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
        <img src={section.imagens[0]} alt='Imagem Circo dos Sonhos' className='w-full h-[200px] md:h-[400px] object-cover' />
  
        <div className='flex w-full flex-wrap gap-4 mt-32'>
          {section.imagens.map((src, index) => (
            <img className='h-[200px] w-auto' key={index} src={src} alt={`Imagem ${index + 1}`} />
          ))}
        </div>
        <div>
          {sectionsData.map((data, index) => {
            if (data.id !== section.id) {
              return (
                <div key={index} className='flex w-full flex-row gap-4'>
                  <Link to={`/servicos/${data.id}`}>
                    {data.titulo}
                  </Link>
                </div>
              );
            }
            return null; 
          })}
        </div>
      </div>

    </div>
  );
};

export default SectionDetail;
