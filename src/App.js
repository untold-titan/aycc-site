import './App.css';
import {Home} from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import { NotFound } from './Pages/NotFound';
import { Contact } from './Pages/About Us/ContactUs';
import { Volunteer } from './Pages/Volunteer';
import { Events } from './Pages/Programs/Events';
import { Classes } from './Pages/Education/Classes';
import { Community } from './Pages/About Us/Community';
import { Packages } from './Pages/Programs/Packages';
import { Booklets } from './Pages/Education/Booklets';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/about-us/community" element={<Community/>}/>
        <Route path="/about-us/contact-us" element={<Contact/>}/>
        <Route path="/programs/events" element={<Events/>}/>
        <Route path="/programs/packages" element={<Packages/>}/>
        <Route path="/education/classes" element={<Classes/>}/>
        <Route path="/education/booklets" element={<Booklets/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
