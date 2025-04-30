import React, { useContext } from 'react'
import CarritoContext from '../../contexts/CarritoContext'
import './ItemCarrito.scss'

const ItemCarrito = ({ producto }) => {
  const {
    eliminarProductoDelCarritoContext,
    agregarProductoAlCarritoContext
  } = useContext(CarritoContext)

  const handleIncrementar = () => {
    agregarProductoAlCarritoContext(producto)
  }

  const calcularSubtotal = () => {
    return (producto.precio * producto.cantidad).toFixed(2)
  }

  const handleDecrementar = () => {
    if (producto.cantidad > 1) {
      agregarProductoAlCarritoContext({
        ...producto,
        cantidad: producto.cantidad - 1
      })
    } else {
      eliminarProductoDelCarritoContext(producto.id)
    }
  }

  return (
    <tr>
      <td>
        <img
          src={producto.foto}
          alt={producto.nombre}
          className="imagen-carrito"
        />
      </td>
      <td>{producto.nombre}</td>
      <td className="cantidad-carrito">
        <div className="contador-cantidad">
          <button
            onClick={handleDecrementar}
            className="boton-contador"
          >-</button>
          <span>{producto.cantidad}</span>
          <button
            onClick={handleIncrementar}
            className="boton-contador"
          >+</button>
        </div>
      </td>
      <td className="precio-carrito">${producto.precio.toFixed(2)}</td>
      <td className="subtotal-carrito">${calcularSubtotal()}</td>
      <td>
        <div className="acciones-carrito">
          <button
            onClick={() => eliminarProductoDelCarritoContext(producto.id)}
            className="boton-eliminar"
          >Eliminar</button>
        </div>
      </td>
    </tr>
  )
}

export default ItemCarrito