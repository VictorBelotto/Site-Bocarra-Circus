import CarrosselPrincipal from './components/CarrosselPrincipal/CarrosselPrincipal';
import Servicos from './components/Servicos/Servicos';
import SliderClientes from './components/SliderClientes/SliderClientes';
import Origem from './components/Origem/Origem';
import Processo from './components/Processo/Processo';
import Processo2 from './components/Processo2/Processo2';
import Slogan from './components/slogan/Slogan';


const Home = () => {
  return (
    <main className='flex flex-col w-full items-center'>
      <CarrosselPrincipal />
      <Slogan/>
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
