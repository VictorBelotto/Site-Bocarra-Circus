import React from 'react'
import { LiaUsersCogSolid } from "react-icons/lia";
import { TbBuildingCircus } from "react-icons/tb";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { BsDiagram2 } from "react-icons/bs";
import Card from '../Card/Card'

const CardsProcesso = () => {
  return (
    
      <div className='flex w-full h-fit flex-col gap-8 md:flex-row lg:w-fit lg:flex-col bg-white px-6 py-4 rounded-lg'>

        <div className='flex w-full justify-between gap-16'>
          <Card
            title={'Requisitos'}
            text={'Identificamos e documentamos os requisitos para atender às suas necessidades específicas.'}
            icon={HiOutlinePresentationChartLine}
          />
          <Card
            title={'Planejamento'}
            text={'Criamos projetos personalizados com modelagem 3D para garantir precisão e inovação.'}
            icon={BsDiagram2}
          />
        </div>

        <div className='flex w-full justify-between gap-16'>
          <Card
            title={'Qualidade'}
            text={'Desde o pedido inicial até as verificações finais, buscamos sempre a mais alta qualidade.'}
            icon={TbBuildingCircus}
          />
          <Card
            title={'Instalação'}
            text={'Realizamos a instalação inicial proativamente para evitar problemas.'}
            icon={LiaUsersCogSolid}
          />
        </div>

      </div>

  )
}

export default CardsProcesso