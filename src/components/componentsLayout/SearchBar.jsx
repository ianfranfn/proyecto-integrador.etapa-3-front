import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import './SearchBar.scss'
import ProductosContext from '../../contexts/ProductosContext'
import useCarrito from '../../hooks/useCarrito'

const SearchBar = () => {

  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const navigate = useNavigate()
  const { productos } = useContext(ProductosContext)
  const { carrito } = useCarrito()

  const cantidadEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0)

  const handleBuscar = (e) => {
    e.preventDefault();
    const productosFiltrados = filtrarProductos(terminoBusqueda);
    navigate('/', { state: { resultados: productosFiltrados } });
  };

  const filtrarProductos = (termino) => {
    return productos.filter(producto => {
      const terminoLower = termino.toLowerCase();
      return (
        producto.nombre.toLowerCase().includes(terminoLower) ||
        producto.categoria.toLowerCase().includes(terminoLower) ||
        producto.detalles.toLowerCase().includes(terminoLower)
      );
    });
  };

  return (
    <div className="search-bar">
        <img src="./imgs/humaita-logo-removebg-preview.webp" className="search-bar__logo-container" alt="" />
        <form className="search-bar__form-container" onSubmit={handleBuscar}>
        <input 
          type="search" 
          id="busqueda" 
          className="search-bar__form-search"
          placeholder="Buscar productos..."
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
        />
        <button type="submit" className="search-bar__form-submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
        <Link to="/carrito" className="search-bar__carrito-container"><i className="bi bi-cart4"></i></Link>
        <div className="menu-toogle">
          <label htmlFor="menu" className="menu-toogle__label">
            <span className="menu-toogle__top-bread" />
            <span className="menu-toogle__meat" />
            <span className="menu-toogle__bottom-bread" />
          </label>
        </div>
      </div>
  )
}

export default SearchBar