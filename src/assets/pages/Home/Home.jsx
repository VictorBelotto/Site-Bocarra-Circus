import React, { Suspense } from 'react';
import CarrosselPrincipal from './components/CarrosselPrincipal/CarrosselPrincipal';
import Loader from '../../components/Loader/Loader';

// Lazy loading dos componentes
const SliderClientes = React.lazy(() => import('./components/SliderClientes/SliderClientes'));
const Origem = React.lazy(() => import('./components/Origem/Origem'));
const Processo = React.lazy(() => import('./components/Processo/Processo'));
const Servicos = React.lazy(() => import('./components/Servicos/Servicos'));
const Processo2 = React.lazy(() => import('./components/Processo2/Processo2'));

const Home = () => {
  return (
    <main className='flex flex-col w-full items-center'>
      <CarrosselPrincipal />

      <section className='flex flex-col justify-center items-center w-[95%] max-w-7xl grande:max-w-[1380px]'>
        <hr className="border border-red-default w-1/4 self-start mt-12 mb-12" />
        <h3 className='text-center'>Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!</h3>
        <hr className="border border-red-default w-1/4 self-end mt-12 mb-14" />
      </section>

      {/* Componentes carregados de forma assíncrona */}
      <Suspense fallback={<Loader />}>
        <Origem />
      </Suspense>

      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Suspense fallback={<Loader />}>
          <Servicos />
        </Suspense>
      </div>

      <Suspense fallback={<Loader />}>
        <Processo />
      </Suspense>

      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Suspense fallback={<Loader />}>
          <Processo2 />
        </Suspense>
      </div>

      <div className='flex flex-col w-full items-center justify-center bg-[#f0f0f0]'>
        <Suspense fallback={<Loader />}>
          <SliderClientes />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
