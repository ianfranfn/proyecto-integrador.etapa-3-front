import './Inicio.scss'
import Card from "../components/Card";
import { useContext, useEffect, useState } from 'react';
import ProductosContext from '../contexts/ProductosContext';
import useTitulo from '../hooks/useTitulo';
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router';

const Inicio = () => {
  const { productos } = useContext(ProductosContext)
  const location = useLocation()
  const [productosMostrados, setProductosMostrados] = useState([])

  useEffect(() => {
    const resultados = location.state?.resultados || productos || []
    setProductosMostrados(resultados)
  }, [location.state, productos])

  useTitulo('Proyecto Integrador - Inicio')

  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1 className="section-cards__header-title">Menú del día</h1>
          {productosMostrados.length > 0 && (
            <p className="section-cards__header-search-result">Se encontraron {productosMostrados.length} productos
            </p>
          )}
        </header>
      </section>

      <section className="cards-container" id="container-productos">
        {productos ? (
          productosMostrados.length > 0 ? (
            productosMostrados.map((producto) => (
              <Card producto={producto} key={producto.id} />
            ))
          ) : (
            <p className="sin-productos">No hay productos disponibles</p>
          )
        ) : (
          <div className="spinner-container">
            <Spinner /> 
          </div>
        )}
      </section>
    </main>
  );
};

export default Inicio;
