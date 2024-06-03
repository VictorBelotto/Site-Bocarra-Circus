import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { TbHandFinger } from 'react-icons/tb'
import img3D from '../../../../../../images/bocarra_visual/lona3D.png'
import imgReal from '../../../../../../images/bocarra_visual/lonaReal.png'

const CompareImage = () => {
  return (
    <section className='flex  flex-col items-center'>
      <div className="w-full lg:w-[700px]">
        <ReactCompareImage 
          leftImage={img3D}
          rightImage={imgReal}
        />
      </div>
      <div className="swipe-instruction flex flex-col items-center mt-1">
        <TbHandFinger className="hand-icon text-slate-500"/>
        <p className='font-semibold text-red-default text-lg'>Deslize para ver</p>
      </div>
    </section>
  )
}

export default CompareImage