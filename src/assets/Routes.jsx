import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageBase from './pages/PageBase/PageBase.jsx'
import Home from './pages/Home/Home.jsx'



const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageBase/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes