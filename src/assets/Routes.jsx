import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageBase from './pages/PageBase/PageBase.jsx'
import Home from './pages/Home/Home.jsx'
import Portifolio from './pages/Portifolio/Portifolio.jsx'



const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageBase/>}>
          <Route index element={<Home/>} />
          <Route path='/portifolio' element={<Portifolio/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes