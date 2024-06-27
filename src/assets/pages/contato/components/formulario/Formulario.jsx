import { useState } from 'react';
import InputTelefone from './inputTelefone/InputTelefone';
import emailjs from '@emailjs/browser'

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


  return (
 
      <div >
        <form  onSubmit={handleSubmit}>
          <span >Preencha os campos</span>
          <div >
            <input
              placeholder="Nome"
              type="text"
              value={nome}
              onChange={handleNomeChange}
              required
            />
          </div>

          <div >
            <InputTelefone
              onChange={handleTelefoneChange}
            />
          </div>

          <div >
            <input
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
              placeholder="Mensagem"
              id="message"
              name="message"
              rows="5"
              value={mensagem}
              onChange={handleMensagemChange}
              required
            />
          </div>
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
  )
  
}

export default Formulario