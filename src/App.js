import './App.css';
import {Home} from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import { NotFound } from './Pages/NotFound';
import { Projects } from './Pages/Projects';
import { FAQ } from './Pages/FAQ';
import { Contact } from './Pages/ContactUs';
import { JoinUs } from './Pages/JoinUs';
import { Events } from './Pages/Programs/Events';
import { Products } from './Pages/Programs/Products';
import { Classes } from './Pages/Programs/Classes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/join-us" element={<JoinUs/>}/>
        <Route path="/programs/events" element={<Events/>}/>
        <Route path="/programs/products" element={<Products/>}/>
        <Route path="/programs/classes" element={<Classes/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
