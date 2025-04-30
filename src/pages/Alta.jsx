import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/componentsAlta/Formulario'
import Tabla from '../components/componentsAlta/Tabla'
import './Alta.scss'
import './Contacto.scss'
import { Link } from 'react-router'

const Alta = () => {
  useTitulo('Alta')

  return (
    <>
      <header className="contacto-main-header">

        <input type="checkbox" id="menu" />

        <nav className="contacto-nav-bar">
          <ul className="contacto-nav-bar__nav-list">
            <li className="contacto-nav-bar__nav-item">
              <Link to="/" className="contacto-nav-bar__nav-link">Inicio</Link>
            </li>
            <li className="contacto-nav-bar__nav-item">
              <Link to="/alta" className="contacto-nav-bar__nav-link">Alta</Link>
            </li>
            <li className="contacto-nav-bar__nav-item">
              <Link to="/nosotros" className="contacto-nav-bar__nav-link">Nosotros</Link>
            </li>
            <li className="contacto-nav-bar__nav-item">
              <Link to="/contacto" className="contacto-nav-bar__nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="contacto-search-bar">
          <img
            src="/imgs/logo-humaita-contacto.webp"
            className="contacto-search-bar__logo-container"
            alt="Logo Humaitá"
          />
          <Link to="/carrito" className="search-bar__carrito-container"><i className="bi bi-cart4"></i></Link>
          <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
          </div>
        </div>
      </header>

      <div className="alta-container">
        <h1 className="alta-titulo">Formulario de alta de productos</h1>
        <hr className="alta-divider" />

        <Formulario />
        <Tabla />
      </div>
    </>
  )
}

export default Alta