import Separador from '../../../assets/components/Separador/Separador.jsx'
import Endereco from './components/endereco/Endereco'
import Formulario from './components/formulario/Formulario.jsx'

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
      
      <div className='py-16 w-full flex justify-center'>
        <div className='w-maxW max-w-hd grande:max-w-grande h-[450px] bg-white-contraste'></div>
      </div>

      <Formulario/>
      <Endereco/>

    </section>
  )
}

export default Contato