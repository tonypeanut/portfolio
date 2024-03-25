import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';

import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Experiencia from './pages/Experiencia';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element = {<Layout/>}>
                    <Route index element ={<Inicio/>}/>
                    <Route path='acerca' element ={<Acerca/>}/>
                    <Route path='experiencia' element ={<Experiencia/>}/>
                    <Route path='proyectos' element ={<Proyectos/>}/>
                    <Route path='contacto' element ={<Contacto/>}/>
                </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
