import './App.css';
import {Home} from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from './Pages/AboutUs';
import Layout from './Pages/Layout';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
