import React from 'react'
import Titulo from '../../../components/Titulo/Titulo'
import img3D from '../../../images/bocarra_visual/lona3D.png'
import imgReal from '../../../images/bocarra_visual/lonaReal.png'
import ReactCompareImage from 'react-compare-image';
import { TbHandFinger } from "react-icons/tb";

const Especialista = () => {
  return (
    <section className='flex flex-col w-[95%] max-w-7xl mt-8 mb-8'>
      <Titulo subtitulo={'tecnologia e inovação'} titulo={'especialistas em lonas para circo.'}/>
      <div className='flex flex-col items-center mt-8'>
        <div className="w-[500px]">
          <ReactCompareImage 
            leftImage={img3D}
            rightImage={imgReal}
          />
        </div>
        <div className="swipe-instruction flex flex-col items-center mt-1">
          <TbHandFinger className="hand-icon text-slate-500"/>
          <p className='font-semibold text-red-default text-lg'>Deslize para ver</p>
        </div>
      </div>
    </section>
  )
}

export default Especialista