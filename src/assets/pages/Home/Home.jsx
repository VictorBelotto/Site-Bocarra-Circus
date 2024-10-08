import CarrosselPrincipal from './components/CarrosselPrincipal/CarrosselPrincipal';
import Servicos from './components/Servicos/Servicos';
import SliderClientes from './components/SliderClientes/SliderClientes';
import Origem from './components/Origem/Origem';
import Processo from './components/Processo/Processo';
import Processo2 from './components/Processo2/Processo2';
import Slogan from './components/slogan/Slogan';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <main className='flex flex-col w-full items-center'>
      <Helmet>
        <title>Bocarra Circus</title>
        <meta name="description" content="Com mais de 30 anos de experiência, a Bocarra Circus oferece lonas circenses de alta qualidade, unindo tradição e inovação para encantar e inspirar o público." />
        <meta property="og:description" content="Com mais de 30 anos de experiência, a Bocarra Circus oferece lonas circenses de alta qualidade, unindo tradição e inovação para encantar e inspirar o público." />
        <meta name="keywords" content="Circo, Lonas, Bocarra Circus, bocarra circus site, home bocarra, bocarra circos, bocarra circus, circus brasil, fabricante de lonas para circo, fabricante de coberturas" />
        <meta name="author" content="Bocarra Circus" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bocarracircus.com" />
        <meta property="og:title" content="Bocarra Circus - Tradição e Inovação em Lonas Circenses" />
        <meta property="og:description" content="Com mais de 30 anos de experiência, a Bocarra Circus oferece lonas circenses de alta qualidade, unindo tradição e inovação para encantar e inspirar o público." />
        <meta property="og:image" content="../../images/bocarra_visual/rino.svg" />
        <link rel="canonical" href="https://www.bocarracircus.com" />
      </Helmet>

      <CarrosselPrincipal />
      <Slogan />
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
