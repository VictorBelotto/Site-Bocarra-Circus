import React from 'react'
import circo from '../../../../images/imagens_carrossel/2.webp'
import Titulo from '../../../../components/Titulo/Titulo'
import Separador from '../../../../components/Separador/Separador'

const Processo2 = () => {
  return (
    <section className=' flex flex-col w-[95%] max-w-7xl grande:max-w-[1380px] items-center  py-16 '>
      <Separador/>
      <Titulo titulo={'Queizy Process'} subtitulo={'Sliced'} variant={'blue'}/>
     <div className=' flex flex-col lg:flex-row w-full rounded-lg justify-between gap-8'>
       <div className='flex flex-col w-full max-w-[750px] gap-4'>
         <img src={circo} loading="lazy" alt='Imagem Circo Chrysostenes' className='w-full md:max-h-[400px] object-cover'/>
         <p className='text-red-default text-base italic justify-self-end ml-auto'>mudar aqui para video</p>
       </div>
       <div className='flex flex-col px-4  gap-4 lg:mt-0'>
         <h3 className='text-[white]' >Nossa Etapa Tal</h3>
         <p className='w-[95%]  text-white-contraste  mb-6 lg:mb-0 lg:max-w-[520px] md:max-w-full'>
           Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
         </p>
       </div>
     </div>
   </section>
  )
}

export default Processo2