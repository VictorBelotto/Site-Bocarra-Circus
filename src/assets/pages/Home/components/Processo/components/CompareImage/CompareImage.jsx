import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { TbHandFinger } from 'react-icons/tb'
import img3D from '../../../../../../images/bocarra_visual/lona3D.png'
import imgReal from '../../../../../../images/bocarra_visual/lonaReal.png'

const CompareImage = () => {
  return (
    <section className='flex w-full flex-col items-center'>
      <h2 className='text-2xl font-semibold text-red-default mb-3'>Projeto 3D vs. Realidade</h2>
      <div className="w-full max-w-[560px] ">
        <ReactCompareImage 
          leftImage={img3D}
          rightImage={imgReal}
        />
      </div>
      <div className="swipe-instruction flex flex-col items-center mt-1">
        <TbHandFinger className="hand-icon text-slate-500"/>
        <p className='font-medium text-red-default text-lg'>Deslize para ver</p>
      </div>
    </section>
  )
}

export default CompareImage