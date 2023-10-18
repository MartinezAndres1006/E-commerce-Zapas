// Navegacion.js
import React from 'react';
import './styles/styles.css';

function Navegacion() {
  return (
    <nav className="Navbar">
      <a href="/">
        <img
          src="https://www.eldiariodeturismo.com.ar/wp-content/uploads/2012/12/Logo-Billabong-II.jpg"
          alt="Logo"
          className='logo__Navbar'
        />
      </a>
      <ul className="navLinks">
        <li><a href="/">Inicio</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogo
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Todas las zapatillas</a></li>
            <li><a class="dropdown-item" href="/">Nike</a></li>
            <li><a class="dropdown-item" href="/">Adidas</a></li>
          </ul>
        </li>
        <li >
          {/* Agregar aquí la barra de búsqueda (puedes utilizar un componente de input) */}
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
