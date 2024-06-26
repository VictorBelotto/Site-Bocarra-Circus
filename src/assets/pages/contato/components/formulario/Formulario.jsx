import { useState } from 'react';
import InputTelefone from '../inputTelefone/InputTelefone';
import emailjs from '@emailjs/browser'
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Separador from '../../../../components/Separador/Separador';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleTelefoneChange = (value) => {
    setTelefone(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      telefone: telefone
    }
    console.log('Dados do formulário:', templateParams);
    emailjs.send("service_eql1imr", "template_3pphr1d", templateParams, "RDLWamZqO7vQAXuRs").then((response) => {
      console.log("Email enviado", response.status, response.text)
      setEmail('');
      setMensagem('');
      setNome('');
      setTelefone('');
    }, (err) => {
      console.log("Erro: ", err)
    })


  };

  const apiWhatsapp = "https://api.whatsapp.com/send?phone=5519996924744&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

  return (
    <div className='flex w-full bg-blue-default py-16 justify-center'>
      <div className='w-maxW max-w-hd grande:max-w-grande'>
      <Separador/>

      <h2 className='text-[white] mb-12'>Entre em contato</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-16 items-center'>

          <div className='flex w-full max-w-[900px] justify-between items-center'>
            <h5 className='text-white-contraste w-80'>
              Envie uma mensagem pelo formulário ou entre em contato por um de nossos canais de atendimento.
            </h5>

            <div className='hidden flex-col gap-4 w-80 md:flex'>
              <p className="flex items-center gap-2 mb-1 text-white-contraste">
                <SiGmail className='text-[white]'/> contato@bocarracircus.com
              </p>
              <a href={apiWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-contraste">
                <FaWhatsapp className='text-[white]' />(19) 99889-4430
              </a>
            </div>
          </div>


          <section className='flex flex-col md:flex-row gap-16 justify-between w-full max-w-[900px]'>
            <div className='flex flex-col gap-16'>
              <input
                className='w-[95%] md:w-80 pb-2 bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none'
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={handleNomeChange}
                required
              />

              <InputTelefone
                classe={'w-[95%] md:w-80 pb-2 bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none'}
                onChange={handleTelefoneChange}
              />

              <input
                className='w-[95%] md:w-80 pb-2 bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none'
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div >
              <textarea
                className='w-[95%] md:w-80 pb-2 h-full bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none resize-none'
                placeholder="Mensagem"
                id="message"
                name="message"
                rows="6"
                value={mensagem}
                onChange={handleMensagemChange}
                required
              />
            </div>
          </section>

          <div className='flex w-[95%] md:w-full max-w-[900px]'>
            <button
              type="submit"
              className='w-fit text-[white] bg-red-default hover:bg-red-hover px-5 py-2 uppercase ml-auto rounded-lg font-medium'
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Formulario