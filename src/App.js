// ACA VOY A ARMAR LA APP ENTERA CON SUS RUTAS

//IMORTO LOS COMPONENTES QUE VOY A USAR
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index/Index';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ContextProvider from './components/Context/ContextProvider';
import CartContainer from "./components/Cart/CartContainer";
import Footer from './components/Footer/Footer';
import PayMethods from './components/Cart/PayMethods';
import Contact from './components/Contact/Contact';
import PayMethodsForm from './components/Cart/PayMethodsForm';
import CompraExitosa from './components/Cart/CompraExitosa';
import About from './components/About/About';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/:id" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/genre/:id" element={<Index />} />
          <Route exact path="/collection/:id" element={<Index />} />
          <Route exact path="/cart" element={<CartContainer />} />
          <Route exact path="/cart/payMethod" element={<PayMethods />} />
          <Route exact path="/cart/finish" element={<PayMethodsForm />} />
          <Route exact path="/compraExitosa" element={<CompraExitosa />} />
          <Route exact path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter >
    </ContextProvider>
  )
}

