import React from 'react'
import ReactDom from 'react-dom'
import { Saludar } from './components/Greeting.jsx'
import Navegacion from './components/navbar.jsx'
 const root= ReactDom.createRoot(document.getElementById('root'))
 
 



 root.render(
    <>
        <Navegacion/>
        <Saludar title="Te amo"/>
        <Saludar title="Quiero comida"/>
        <Saludar title="Tengo hambre"/>
    </>
 )

