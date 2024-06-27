import Separador from '../../../assets/components/Separador/Separador.jsx'
import Endereco from './components/endereco/Endereco'

const Contato = () => {
  return (
    <section className='flex flex-col pb-32  items-center'>
      <div className='w-full pt-32 bg-blue-default flex justify-center min-h-screen'>
        <div className="w-maxW max-w-hd grande:max-w-grande">
          <Separador />
          <h2 className='text-[white]  mb-8 md:mb-16 lg:mb-8'>Fale conosco</h2>
          <p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl ml-4'>
            Estamos aqui para ajudar! Quer saber mais sobre nossos produtos e serviços? Preencha o formulário abaixo ou mande uma mensagem via Whatsapp. Nossa equipe responderá o mais rápido possível.
          </p>
        </div>
      </div>
      
      <Endereco/>


    </section>
  )
}

export default Contato