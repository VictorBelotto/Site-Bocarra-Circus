import CarrosselPrincipal from './components/CarrosselPrincipal/CarrosselPrincipal';
import Servicos from './components/Servicos/Servicos';
import SliderClientes from './components/SliderClientes/SliderClientes';
import Origem from './components/Origem/Origem';
import Processo from './components/Processo/Processo';
import Processo2 from './components/Processo2/Processo2';


const Home = () => {
  return (
    <main className='flex flex-col w-full items-center'>
      <CarrosselPrincipal />
      <section className='flex flex-col justify-center items-center w-maxW max-w-hd grande:max-w-grande'>
        <hr className="border border-red-default w-full self-start my-8" />
        <h3 className='text-center'>Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!</h3>
        <hr className="border border-red-default w-full self-end my-8" />
      </section>
      <Origem />
      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Servicos />
      </div>
      <Processo />
      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Processo2 />
      </div>
      <div className='flex flex-col w-full items-center justify-center bg-[#f0f0f0]'>
        <SliderClientes />
      </div>
    </main>
  );
};

export default Home;
