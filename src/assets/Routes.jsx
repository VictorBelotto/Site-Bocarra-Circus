import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageBase from './pages/PageBase/PageBase.jsx'
import Home from './pages/Home/Home.jsx'
import Portifolio from './pages/Portifolio/Portifolio.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Servicos from './pages/Servicos/Servicos'
import ScrollToTop from './components/ScrollTop/ScrollTop.jsx'



const AppRoutes = ()=> {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<PageBase/>}>
          <Route index element={<Home/>} />
          <Route path='/portifolio' element={<Portifolio/>} />
          <Route path='/sobre' element={<Sobre/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes