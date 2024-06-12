import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { TbHandFinger } from 'react-icons/tb'
import img3D from '../../../../../../images/bocarra_visual/lona3D.png'
import imgReal from '../../../../../../images/bocarra_visual/lonaReal.png'

const CompareImage = () => {
  return (
    <section className='flex flex-col items-center'>
      <h3 className=' text-red-default mb-3 '>Projeto 3D vs. Realidade</h3>
      <div className="w-full md:w-[590px] flex items-end ">
        <ReactCompareImage 
          leftImage={img3D}
          rightImage={imgReal}
        />
      </div>
      <div className="swipe-instruction flex flex-col items-center mt-">
        <TbHandFinger className="hand-icon text-slate-500"/>
        <p className=' text-red-default'>Deslize</p>
      </div>
    </section>
  )
}

export default CompareImage