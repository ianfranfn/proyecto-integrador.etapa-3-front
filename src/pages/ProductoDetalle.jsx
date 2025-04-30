import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { peticionesHttp } from '../helpers/peticiones-http'
import Spinner from '../components/Spinner'
import './ProductoDetalle.scss'

const ProductoDetalle = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const urlBackend = import.meta.env.VITE_BACKEND_PRODUCTOS


  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const url = `${urlBackend}/${id}`
        const producto = await peticionesHttp(url, {})
        setProducto(producto)
      } catch (error) {
        console.error('[ProductoDetalle] Error:', error)
      }
    }
    obtenerProducto()
  }, [id])

  return (
    <div className='main-content'>
    <div className="detalle-container">
      {producto ? (
        <>
          <h1 className="detalle-titulo">{producto.nombre}</h1>
          <div className="detalle-contenido">
            <img 
              src={producto.foto} 
              alt={producto.nombre} 
              className="detalle-imagen"
            />
            <div className="detalle-info">
              <p className="detalle-item detalle-precio">Precio: ${producto.precio}</p>
              <p className="detalle-item">Stock: {producto.stock}</p>
              <p className="detalle-item">Marca: {producto.marca}</p>
              <p className="detalle-item">Categoría: {producto.categoria}</p>
              <p className="detalle-item detalle-especificacion">Descripcion: {producto.descripcion}</p>
              <p className="detalle-item detalle-envio">
                Envío: {producto.envio ? 'Disponible' : 'No disponible'}
              </p>
              <button className='detalle-boton'>Pedir ahora!</button>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner-detalle">
        <Spinner />
        </div>
      )}
    </div>
    </div>
  )
}

export default ProductoDetalle