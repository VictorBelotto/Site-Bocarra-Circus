import Logo from '../../images/bocarra_visual/Est1B.svg'
import RedesSociais from './components/RedesSociais/RedesSociais'
import Cards from './components/Cards/Cards'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full justify-center items-center bg-red-default text-[white]'>
      <section className='flex justify-between p-5 md:p-8 w-maxW max-w-hd grande:max-w-grande bg-blue-default rounded-lg relative top-[-64px] mb-[-64px]'>
        <div className='flex flex-col w-full' >
          <div className='flex flex-wrap w-full justify-between'>
            <div className='flex flex-col gap-8'>
              <h2>Vamos Conversar!</h2>
              <p>
                Tem um projeto em mente? Ou está curioso sobre nossos serviços?
                <br />
                Entre em contato conosco e vamos explorar suas ideias juntos!
              </p>
              <hr className='w-12' />
              <p className='text-white-contraste'>
                contato@bocarracircus.com
                <br />
                (19) 99889-4430
              </p>
            </div>
            <RedesSociais />
          </div>

          <div className='flex gap-8 mt-16 lg:mt-0 md:flex-row md:flex-wrap flex-wrap w-full md:items-end '>
            <Cards
              titulo={'Serviços'}
              label={'Explore nossos serviços'}
              to={'/servicos'}
            />
            <Cards
              titulo={'Galeria'}
              label={'Veja nossos projetos'}
              to={'/projetos'}
            />
            <Cards
              classe={'mr-16 md:mr-0'}
              titulo={'Sobre Nós'}
              label={'Conheça nossa história'}
              to={'/sobre'}
            />
            <Cards
              titulo={'Contato'}
              label={'Entre em contato conosco'}
              to={'/contato'}
            />
            <Link className='w-32 ml-auto self-end relative top-[-96px] mb-[-96px] sm:mt-8 lg:mt-0 sm:top-0 sm:mb-0     sm:static' to={'/'}>
              <img
                className='w-32 ml-auto self-end relative top-[-96px] mb-[-96px] sm:mt-8 lg:mt-0 sm:top-0 sm:mb-0 sm:static'
                loading="lazy"
                src={Logo}
                alt="Logo Bocarra Circus"
              />
            </Link>
          </div>
        </div>
      </section>

      <aside className='flex text-center items-center justify-between textsFont pb-4 w-maxW max-w-hd grande:max-w-grande mt-1'>
        <p className='titlesFont '>Bocarra Circus &copy; 2024</p>
        <a className='titlesFont text-xs' href="https://github.com/VictorBelotto" target="_blank" rel="noopener noreferrer">designed by <i className='underline'>Victor Belotto</i></a>
      </aside>

    </footer>
  )
}

export default Footer