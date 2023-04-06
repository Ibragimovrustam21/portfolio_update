import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation";
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';

import { MyProject } from "./styles/global.style";

export const App = () => {
  return (
    <MyProject>
      <Navigation />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </MyProject>
  );
}

