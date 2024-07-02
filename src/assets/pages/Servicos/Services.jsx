import Card from './components/Card/Card';
import { servicesData } from './servicesData/servicesData';
import Separador from '../../components/Separador/Separador';
import ContinueNavegando from '../../components/continueNavegando/ContinueNavegando';

const Services = () => {
  return (
    <main className='flex flex-col w-full items-center mb-32'>
      <div className='flex w-full bg-blue-default justify-center'>
        <div className='flex flex-col w-maxW max-w-hd grande:max-w-grande h-screen pt-32'>
          <Separador />
          <h2 className='text-[white] mb-8 md:mb-16 lg:mb-8'>Soluções Personalizadas para Cada Projeto</h2>
          <p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl ml-4'>
            Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.
          </p>
          <ContinueNavegando/>
        </div>
      </div>

      {servicesData.map((data) => (
        <Card
          key={data.id}
          to={data.to}
          titulo={data.titulo}
          descricao={data.descricao}
          img={data.img}
          variant={data.variant}
        />
      ))}


    </main>
  );
};

export default Services;
