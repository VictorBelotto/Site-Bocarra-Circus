import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const PaginaBase = () => {

  return (
    <div className='flex flex-col h-screen'>

      <Header/>
        <main className='grow'>
          <Outlet/>
        </main>
      <Footer/>
    
    </div>
  )
}

export default PaginaBase