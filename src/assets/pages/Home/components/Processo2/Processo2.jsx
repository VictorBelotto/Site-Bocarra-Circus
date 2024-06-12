import React from 'react'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
import circo from '../../../../images/imagens_carrossel/2.jpg'
import Titulo from '../../../../components/Titulo/Titulo'

const Processo2 = () => {
  return (
    <section className=' flex flex-col w-[95%] max-w-7xl items-center mt-16 '>

     <div className=' flex flex-col lg:flex-row w-full max-w-7xl  rounded-lg justify-between gap-8'>
       <div className='flex flex-col w-full max-w-[750px] gap-4'>
         <img src={circo} alt='Imagem Circo Chrysostenes' className='w-full md:max-h-[400px] object-cover aspect-[16/9]'/>
         <p className='text-red-default text-sm italic justify-self-end ml-auto'>mudar aqui para video</p>
       </div>
       <div className='flex flex-col px-4 mt-8 gap-4 lg:mt-0'>
         <h3 className='text-blue-defaul' >Nossa Etapa Tal</h3>
         <p className='w-[95%]  text-gray-text  mb-6 lg:mb-0 lg:max-w-96 md:max-w-full'>
           Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
         </p>
       </div>
     </div>
  
    
     <hr className="border border-red-default w-1/4 self-end mt-32 mb-12"/>
   </section>
  )
}

export default Processo2