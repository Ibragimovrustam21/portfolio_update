import { Routes, Route } from "react-router-dom"
import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { Faqs } from './pages/Faqs/Faqs';
import { Portfolio } from './pages/Portfolio/Portfolio';

import AOS from 'aos'
import { MyProject } from "./styles/global.style";
import { Navigation } from "./components/Navigation/Navigation";

export const App = () => {
  AOS.init()

  return (
    <MyProject>
      <Navigation />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/faqs' element={<Faqs />} />
      </Routes>
    </MyProject>
  );
}

