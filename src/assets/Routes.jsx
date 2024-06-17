import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageBase from './pages/PageBase/PageBase.jsx'
import Home from './pages/Home/Home.jsx'
import Portifolio from './pages/Portifolio/Portifolio.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Servicos from './pages/Servicos/Servicos.jsx'



const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageBase/>}>
          <Route index element={<Home/>} />
          <Route path='/portifolio' element={<Portifolio/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/servicos' element={<Servicos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes