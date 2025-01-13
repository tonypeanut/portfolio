import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';

import Inicio from './pages/Inicio';
import TodosProyectos from './pages/TodosProyectos';
import TodosCursos from './pages/TodosCursos'

import { ContextProvider } from './context/ContextProvider';

function App() {
    return (
        <BrowserRouter>
                <ContextProvider>
                    <Routes>
                            <Route path='/' element = {<Layout/>}>
                                <Route index element ={<Inicio/>}/>
                                <Route path='proyectos' element= {<TodosProyectos/>}/>
                                <Route path='cursos' element= {<TodosCursos/>}/>
                            </Route>
                    </Routes>
                </ContextProvider>
        </BrowserRouter>
    )
}
export default App

