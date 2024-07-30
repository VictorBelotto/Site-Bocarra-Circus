// src/AppRoutes.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageBase from './pages/PageBase/PageBase.jsx';
import Home from './pages/Home/Home.jsx';
import Portifolio from './pages/Portifolio/Portifolio.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import ScrollToTop from './components/ScrollTop/ScrollTop.jsx';
import Services from './pages/Servicos/Services.jsx';
import SectionDetail from './components/SectionDetail/SectionDetail.jsx';
import Contato from './pages/contato/Contato.jsx';
import Transition from './components/Transition/Transition.jsx'; // Import the new Transition component
import SectionLonas from './components/SectionLonas/SectionLonas.jsx';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Transition>
        <Routes>
          <Route path='/' element={<PageBase />}>
            <Route index element={<Home />} />
            <Route path='/portifolio' element={<Portifolio />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/servicos' element={<Services />} />
            <Route path='/servicos/:id' element={<SectionDetail />} />
            <Route path='/circo/:id' element={<SectionLonas />} />
            <Route path='/contato' element={<Contato />} />
          </Route>
        </Routes>
        
      </Transition>
    </BrowserRouter>
  );
};

export default AppRoutes;
