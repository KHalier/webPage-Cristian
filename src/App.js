import './App.css'
import React from 'react'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation , useNavigate} from 'react-router-dom'
import ROUTES from './components/Routes/Routes.helper'
import Inicio from './components/Inicio/Inicio'


function App () {
const location= useLocation();
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav/>
      <Routes>
        <Route path={ROUTES.INICIO} element={<Inicio/>}/>
        <Route path={ROUTES.CONTACTO} element={<h1>AQUI VA EL CONTACTO </h1>}/>
        <Route path={ROUTES.PRODUCTOS} element={<h1>AQUI VAN LOS PRODUCTOS </h1>}/>
        <Route path={ROUTES.SERVICES} element={<h1>AQUI VAN LOS SERVICIOS </h1>}/>        
        <Route path={ROUTES.DETALLES} element={<h1>AQUI VAN LOS DETALLES DEL PRODUCTO </h1>}/> 
      </Routes>
    </div>
  )
}

export default App


