import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';

import Inicio from './pages/Inicio';

import { ContextProvider } from './context/ContextProvider';

function App() {
  return (
      <BrowserRouter>
            <ContextProvider>
                <Routes>
                        <Route path='/' element = {<Layout/>}>
                            <Route index element ={<Inicio/>}/>
                        </Route>
                </Routes>
            </ContextProvider>
      </BrowserRouter>
  )
}

export default App
