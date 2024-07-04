import Separador from '../../components/Separador/Separador'
import ContinueNavegando from '../../components/continueNavegando/ContinueNavegando'
import Historia from './components/historia/Historia'
import Missao from './components/missao/Missao'

const Sobre = () => {
  return (
    <main className='flex flex-col w-full items-center mb-32' >
      <section className="flex w-full bg-blue-default justify-center ">
        <div className="w-maxW max-w-hd grande:max-w-grande min-h-screen pt-36 flex flex-col">
          <Separador />
          <h2 className="text-[white] mb-8 md:mb-16 lg:mb-8">Conheça nossa história</h2>
          <p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl ml-4'>
            Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.
          </p>
          <ContinueNavegando />

        </div>
      </section>
      <div className='flex w-full justify-center my-16'>
        <Historia />
      </div>


      <section className="flex w-full bg-blue-default justify-center ">
        <Missao/>
      </section>



    </main>
  )
}

export default Sobre