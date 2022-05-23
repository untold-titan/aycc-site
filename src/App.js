import './App.css';
import {Home} from './Pages/Home'
import { HashRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from './Pages/AboutUs';
import Layout from './Pages/Layout';
import { NotFound } from './Pages/NotFound';
import { Projects } from './Pages/Projects';
import { FAQ } from './Pages/FAQ';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/faq" element={<FAQ/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
