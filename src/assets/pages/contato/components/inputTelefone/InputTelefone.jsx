import { useState } from 'react';

const InputTelefone = ({onChange, classe}) => {
  const [telefone, setTelefone] = useState('');

  const formatarTelefone = (input) => {
    const numeros = input.replace(/\D/g, '');
    let formatoTelefone = '';
    if (numeros.length === 11) {
      formatoTelefone = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    } else if (numeros.length === 10) {
      formatoTelefone = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    } else {
      formatoTelefone = numeros;
    }

    return formatoTelefone;
  };

  const handleTelefoneChange = (e) => {
    const inputTelefone = e.target.value;
    const telefoneFormatado = formatarTelefone(inputTelefone);
    setTelefone(telefoneFormatado);
    onChange(telefoneFormatado); 
  };

  return (
    <>
      <input
        className={classe}
        placeholder="Digite seu telefone com ddd"
        type="tel"
        id='telefone'
        value={telefone}
        onChange={handleTelefoneChange}
        required
      />
    </>
  );
};

export default InputTelefone;