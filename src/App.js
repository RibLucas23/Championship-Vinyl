// ACA VOY A ARMAR LA APP ENTERA CON SUS RUTAS

//IMORTO LOS COMPONENTES QUE VOY A USAR
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index/Index';
import NavBar from './components/NavBar/NavBar';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </BrowserRouter >
  )
}

