import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';

import Inicio from './pages/Inicio';
import TodosProyectos from './pages/TodosProyectos';

import { ContextProvider } from './context/ContextProvider';

function App() {
    return (
        <BrowserRouter>
                <ContextProvider>
                    <Routes>
                            <Route path='/' element = {<Layout/>}>
                                <Route index element ={<Inicio/>}/>
                                <Route path='proyectos' element= {<TodosProyectos/>}/>
                            </Route>
                    </Routes>
                </ContextProvider>
        </BrowserRouter>
    )
    }

export default App

